import "./App.css";
import data from "./assets/data.json";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
	return (
		<>
			<div className="app">
				<Header />
				{data.map((item, index) => (
					<Section
						key={index}
						time={item.time}
						title={item.title}
						type={item.type}
						isUnseen={item.isUnseen}
						image={item.image}
						duration={item.duration}
						direct={item.direct}
					/>
				))}
			</div>
		</>
	);
}

export default App;
