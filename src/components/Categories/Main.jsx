import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styles from 'scss/modules/Categories/Main.module.scss';

import Header from './Elements/Header';
import Item from 'components/Categories/Elements/Item';

function Main() {
	const { category } = useParams();

	const { products } = useSelector(state => state.products);
	const { images } = useSelector(state => state.images);

	return (
		<section className={styles.main}>
			<div className='container'>
				<div className={styles.categories}>
					<Header />

					<ul className={styles.products}>
						{
							category === 'All' || category === undefined ?
								products.map((product, index) => (
									<Item key={index} {...product} images={images[index]} />
								))
								:
								products.map((product, index) => (
									product.category === category.toLowerCase() &&
									<Item key={index} {...product} index={index} images={images[index]} />
								))
						}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Main;
