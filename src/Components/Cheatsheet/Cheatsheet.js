import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import cheatsheets from './cheatsheets.json';
import './Cheatsheet.scss';

function Cheatsheet() {
	const [selectedTopic, setSelectedTopic] = useState({});
	const selectedTopicRef = useRef();
	const locationData = useLocation();

	useEffect(() => {
		const [categoryUrl, topicUrl] = locationData.pathname
			.replaceAll('/cheatsheet', '')
			.split('/')
			.filter(value => value);
		let topic;

		if(categoryUrl && topicUrl) {
			const category = cheatsheets.find(category => category.url === categoryUrl);
			topic = category?.topics.find(topic => topic.url === topicUrl);
		}

		setSelectedTopic(topic || {});
	}, [locationData]);

	function handleCodeCopy(code) {
		code = code.replaceAll('<i>', '').replaceAll('</i>', '');
		navigator?.clipboard?.writeText(code);
	}

	function scrollToSelectedTopic() {
		const CONTENT_WRAPS_AT_PIXEL = 973;
		if(window.innerWidth <= CONTENT_WRAPS_AT_PIXEL) {
			selectedTopicRef.current.scrollIntoView();
		}
	}

	function handleTopicSelect(category, topic) {
		setSelectedTopic(topic);
		scrollToSelectedTopic();
		window.history.pushState({}, '', `/cheatsheet/${category.url}/${topic.url}`);
	}

    return (
		<div className="cheatsheet">
			<h1>Cheatsheet</h1>
			<div className="content">

				<div className="categories">
					{cheatsheets.map((category, categoryIdx) => {
						return (
							<div className="category" key={categoryIdx}>
								<div className="name">
									<div className="circle">
										<img src={require(`../../Images/cheatsheets/${category.imgName}.png`)} alt={category.name} />
									</div>
									<p>{category.name}</p>
								</div>
								{category.topics.map((topic, topicIdx) => {
									return (
										<p
											className={"topic" + ((topic === selectedTopic) ? " active" : "")}
											key={topicIdx}
											onClick={() => handleTopicSelect(category, topic)}>
											{topic.name}
										</p>
									);
								})}
							</div>
						);
					})}
				</div>

				<div ref={selectedTopicRef} className="selected-topic">
					{(!selectedTopic?.name) ?
						<div className="no-selected">
							<p>Select a topic from the list</p>
						</div> :
						<>
							<div className="name">
								<h3>{selectedTopic.name}</h3>
							</div>
							{selectedTopic.cheats.map((cheat, cheatIdx) => {
								return (
									<div key={cheatIdx} className="cheat">
										<h4 className="title">{cheat.name}</h4>
										{cheat.codes?.map((code, codeIdx) => {
											return (
												<div key={codeIdx} className="codeBlock">
													<p className="code">
														<span>$</span>
														{parse(code)}
													</p>
													<div onClick={() => handleCodeCopy(code)} className="copy">
														<i className="bi bi-copy"></i>
													</div>
												</div>
											);
										})}
										{cheat.descriptions?.map((desc, descIdx) => {
											return (
												<p key={descIdx} className="desc">
													{parse(desc)}
												</p>
											);
										})}
									</div>
								);
							})}
						</>
					}
				</div>

			</div>
		</div>
    );
  }
  
  export default Cheatsheet;