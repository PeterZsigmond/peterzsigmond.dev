import { useState, useRef } from 'react';
import parse from 'html-react-parser';
import cheatsheets from './cheatsheets.json';
import './Cheatsheet.scss';

function Cheatsheet() {

	const [selected, setSelected] = useState({ category: 0, topic: 0 });
	const selectedTopicRef = useRef();

	function handleCodeCopy(code) {
		code = code.replaceAll('<i>', '').replaceAll('</i>', '');
		navigator?.clipboard?.writeText(code);
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
										<img src={ require("../../Images/cheatsheets/" + category.imgName + ".png") } alt={category.name} />
									</div>
									<p>{category.name}</p>
								</div>
								{category.topics.map((topic, topicIdx) => {
									return (
										<p
											className={"topic" + ((selected.category === categoryIdx && selected.topic === topicIdx) ? " active" : "")}
											key={topicIdx}
											onClick={() => {
												setSelected({ category: categoryIdx, topic: topicIdx });
												selectedTopicRef.current.scrollIntoView();
											}
										}>
											{topic.name}
										</p>
									);
								})}
							</div>
						);
					})}

				</div>

				<div ref={selectedTopicRef} className="selected-topic">

					<div className="name">
						<h3>{ cheatsheets[selected.category].topics[selected.topic].name }</h3>
					</div>

					{cheatsheets[selected.category].topics[selected.topic].cheats.map((cheat, cheatIdx) => {
						return (
							<div key={cheatIdx} className="cheat">
								<h4 className="title">{cheat.name}</h4>
								{cheat.codes?.map((code, codeIdx) => {
									return (
										<div key={codeIdx} className="code">
											<p>{parse(code)}</p>
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

				</div>

			</div>

		</div>
    );
  }
  
  export default Cheatsheet;
  