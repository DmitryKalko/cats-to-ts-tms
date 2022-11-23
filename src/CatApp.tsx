import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./catApp.module.css";

import CatList from "./components/CatList";
import CatDetails from "./components/CatDetails";
import FormForCat from "./components/FormForCat";

import { ICat, ICatDetailProps } from "./types/types";

const url = "https://serene-mesa-35124.herokuapp.com/files";

const CatApp: React.FC = () => {

	const [cats, setCats] = useState<ICat[]>([]);
	const [selectedCat, setSelectedCat] = useState<string>('');
	const [catDetail, setCatDetail] = useState<ICatDetailProps["catDetail"] | null>(null);

	useEffect(() => {
		axios.get(`${url}/cats/list.json`).then((response) => {
			const cats = response.data.data;
			setCats(cats);
		});
	}, []);

	useEffect(() => {
		if(selectedCat !== null) {
			fetchData(selectedCat);
		}
	}, [selectedCat]);

	const fetchData = (path: string): void => {

		axios.get(`${url}${path}`).then((response) => {
			const catDetail = response.data;
			setCatDetail(catDetail);
		});
	};

	const toBuy = (id: number): void => {
		const selectedCat = cats.filter((cat) => {
			if (cat.id === id) {
				return cat;
			}
			return null;
		});
		setSelectedCat(selectedCat[0].more);
	};

	if (!cats) {
		return <h1>ЗАГРУЗКА</h1>;
	}
	return (
		<div className={styles.app}>
			<div className={styles.mainBlock}>
				<CatList cats={cats} toBuy={toBuy} />

				{catDetail && (
					<>
						<CatDetails catDetail={catDetail} url={url} />
					</>
				)}
			</div>

			<br />
			<FormForCat />
		</div>
	);
};

export default CatApp;
