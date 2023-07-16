import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import useWindowDimensions from 'hooks/useWindowDimensions';

import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from 'assets/icons/Logo-solid.svg';
import MenuDesktop from './components/MenuDesktop/MenuDesktop';
import MenuMobile from './components/MenuMobile/MenuMobile';
import MenuToggler from './components/MenuToggler/MenuToggler';

const Navbar = () => {
	const collapseMenu = 768;
	const location = useLocation();
	const menuMobileRef = useRef(null);
	const menuTogglerRef = useRef(null);
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const [timeline, setTimeline] = useState();
	const { width } = useWindowDimensions();

	useEffect(() => {
		setIsMenuToggled(false);
		if (timeline) {
			timeline.reverse();
		}
	}, [width, location]);

	// click handler
	function menuTogglerClickHandler(e) {
		if (e.currentTarget.hasAttribute('disabled')) return;  // i dont know why but the button still working while disabled whitout this

		menuTogglerRef.current.setAttribute('disabled', true)

		if (!isMenuToggled) {
			setIsMenuToggled(true);
			toggleAnimation();
		} else {
			setIsMenuToggled(false);
			timeline.reverse();
		}
	}

	// gsap animation
	function toggleAnimation() {
		const span = gsap.utils.selector(menuTogglerRef.current)('span');
		const lis = gsap.utils.selector(menuMobileRef.current)('ul li');

		const tl = gsap.timeline({
			onComplete: () => {
				menuTogglerRef.current.removeAttribute('disabled')
			},
			onReverseComplete: () => {
				menuTogglerRef.current.removeAttribute('disabled')
			}
		});
		
		tl
			.to(span, 0.05, { x: '-25%', top: '50%', width: '30px', duration: 0.05 })
			.to(span[0], { rotate: '45deg', duration: 0.05 }, '<')
			.to(span[1], { rotate: '-45deg', duration: 0.05 }, '<')
			.to(menuMobileRef.current, 0.5, { ease: 'power5.in', clipPath: 'polygon(100% 0, -170% 0, 100% 170%)' })
			.to(lis, { x: 0, autoAlpha: 1, stagger: 0.1 })

		setTimeline(tl)
	}

	return (
		<nav className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link to='/'>
						<Logo />
					</Link>
				</div>
				{(width > collapseMenu) ? (
					<MenuDesktop />
				) : (
					<>
						<MenuToggler ref={menuTogglerRef} onClick={menuTogglerClickHandler} />
						<MenuMobile ref={menuMobileRef} />
					</>
				)}
			</div>
		</nav>
	)
}

export default Navbar