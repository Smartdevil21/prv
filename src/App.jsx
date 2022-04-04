import Styles from "./App.module.scss";
import { useRef, useEffect, useState, createContext } from "react";
import gsap from "gsap";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import SmallContact from "./Components/Contact_info/SmallContact";
import About from "./Components/About/About";
import { useLocation } from "react-router-dom";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

const StatesContext = createContext();

function App() {
	const location = useLocation();
	// const [loaded, setLoaded] = useState(false);

	//for body
	const body = useRef();

	//for layers
	const layer1 = useRef();
	const layer2 = useRef();
	const layer3 = useRef();
	const layer4 = useRef();
	const layer5 = useRef();

	//for lines
	const line1 = useRef();
	const line2 = useRef();
	const line3 = useRef();
	const line4 = useRef();

	//for gsap timeline
	const layerTL = useRef();
	const nameTL = useRef();

	//for letters PRTK.
	const p = useRef();
	const r = useRef();
	const t = useRef();
	const k = useRef();
	const fullstop = useRef();

	//for loader
	const loader = useRef();
	const progress = useRef();

	const [states, setStates] = useState({
		activeLink: location.pathname,
		reversed: false,
		timeline: layerTL,
	});

	function reveal() {
		nameTL.current = gsap
			.timeline()
			.to(loader.current, { width: 200, duration: 0.5 })
			.to(p.current, { y: 0, duration: 0.4 }, "+=0.5")
			.to(r.current, { y: 0, duration: 0.4 }, "-=0.3")
			.to(t.current, { y: 0, duration: 0.4 }, "-=0.3")
			.to(k.current, { y: 0, duration: 0.4 }, "-=0.3")
			.to(fullstop.current, { y: 0, duration: 0.3 });
	}

	//for caching the images prior to web brouser cache memory
	const cacheImgs = async (srcArr) => {
		const promises = await srcArr.map((src) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = src;
				img.onload = resolve("Loaded");
				img.onerror = reject();
			});
		});
		const result = await Promise.all(promises);
		console.log(result);
		nameTL.current.reversed(true);
		setTimeout(() => {
			layerTL.current = gsap
				.timeline()
				.to(layer1.current, { height: 0, duration: 0.5 })
				.to(layer5.current, { height: 0, duration: 0.5 }, "-=0.5")
				.to(layer2.current, { height: 0, duration: 0.5 }, "-=0.3")
				.to(layer4.current, { height: 0, duration: 0.5 }, "-=0.5")
				.to(layer3.current, { height: 0, duration: 0.5 }, "-=0.3");
		}, 2000);
	};

	useEffect(() => {
		const imgArr = [
			"./Images/bork_1.png",
			"./Images/profile.png",
			"./Images/weddingPhotographer.png",
			"./Images/chillMountains.png",
			"./Images/parallax.png",
			"./Images/portfolio1.png",
			"./Images/portfolio2.png",
			"./Images/stayAfloat.png",
		];
		reveal();
		setTimeout(() => {
			cacheImgs(imgArr);
		}, 2000);
	}, []);

	useEffect(() => {
		layerTL.current?.reversed(states.reversed);
	}, [states.reversed]);

	useEffect(() => {
		setStates((prev) => ({ ...prev, activeLink: location.pathname }));
	}, [location.pathname]);

	return (
		<StatesContext.Provider value={{ states, setStates }}>
			<div className={`${Styles.app} app`} ref={body}>
				<div className={Styles.prtk}>
					<span>
						<h1 ref={p}>P</h1>
						<h1 ref={r}>R</h1>
						<h1 ref={t}>T</h1>
						<h1 ref={k}>K</h1>
						<strong>
							<h1 ref={fullstop}>.</h1>
						</strong>
					</span>
					<div className={Styles.loader} ref={loader}>
						<div className={Styles.progress} ref={progress}></div>
					</div>
				</div>
				<div className={Styles.layer1} ref={layer1}></div>
				<div className={Styles.layer2} ref={layer2}></div>
				<div className={Styles.layer3} ref={layer3}></div>
				<div className={Styles.layer4} ref={layer4}></div>
				<div className={Styles.layer5} ref={layer5}></div>
				<div className={Styles.bg_line_1} ref={line1}></div>
				<div className={Styles.bg_line_2} ref={line2}></div>
				<div className={Styles.bg_line_3} ref={line3}></div>
				<div className={Styles.bg_line_4} ref={line4}></div>
				{/* <div className={Styles.bg_line_5}></div> */}

				<Navbar />
				<Sidebar />
				<SmallContact />
				<Routes>
					<Route
						path="/prtk"
						element={
							<>
								<Home />
							</>
						}
					></Route>
					<Route
						path="/about"
						element={
							<>
								<About />
							</>
						}
					></Route>
					<Route
						path="/services"
						element={
							<>
								<Services />
							</>
						}
					></Route>
					<Route
						path="/portfolio"
						element={
							<>
								<Portfolio />
							</>
						}
					></Route>
					<Route
						path="/contact"
						element={
							<>
								<Contact />
							</>
						}
					></Route>
				</Routes>
			</div>
		</StatesContext.Provider>
	);
}

export default App;
export { StatesContext };
