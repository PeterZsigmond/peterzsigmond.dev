import { useState, useRef } from 'react';
import parse from 'html-react-parser';
import { cheatsheets } from "./CheatSheets";
import './Cheatsheet.scss';

function Cheatsheet() {

	const [selected, setSelected] = useState([0, 0]);
	let selectedTopic = cheatsheets[selected[0]].topics[selected[1]];

	const selectedTopicRef = useRef();

    return (
		<div className="cheatsheet">
			<h1>Cheatsheet</h1>

			<div className="content">

				<div className="categories">
					{cheatsheets.map((category, index_0) => {
						return (
							<div className="category" key={index_0}>
								<div className="name">
									<div className="circle">
										<img src={require("../../Images/cheatsheets/" + category.img + ".png")} alt={category.category} />
									</div>
									<p>{category.category}</p>
								</div>
								{category.topics.map((topic, index_1) => {
									return (
										<p className={"topic" + ((index_0 === selected[0] && index_1 === selected[1]) ? ' active' : '')}
											key={index_1}
											onClick={() => {
												setSelected([index_0, index_1]);
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
						<h3>{selectedTopic.name}</h3>
					</div>
					{selectedTopic.cheats.map((cheat, index) => {
						return (
							<div key={index} className="cheat">
								<h4 className="title">{cheat.name}</h4>
								<p className="code">{parse(cheat.code)}</p>
								<p className="desc">{parse(cheat.desc)}</p>
							</div>
						);
					})}
				</div>

			</div>

		</div>
    );
  }
  
  export default Cheatsheet;
  