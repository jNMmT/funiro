import React from 'react';

import styles from 'scss/modules/Products/Elements/Item.module.scss';

import Info from './Info';
import Badge from './Badge';
import Back from './Back';

function Item({ ...product }) {
	const [back, setBack] = React.useState(false);

	return (
		<li className={styles.item} onMouseLeave={() => setBack(false)}>
			{
				back ?
					<Back {...product} />
					:
					<>
						<div className={styles.block} onMouseEnter={() => setBack(true)}>
							<img className={styles.image} src={product.img} alt={product.title} />
						</div>

						<Info {...product} />

						<Badge {...product} />
					</>
			}
		</li>
	)
}

export default Item;
