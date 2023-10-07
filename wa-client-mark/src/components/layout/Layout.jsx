import Header from './header/Header'
import cn from 'clsx'
import styles from './Layout.module.scss'
import { useCheckAuth } from '../../hooks/useCheckAuth'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	useCheckAuth()
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</div>
	)
}

export default Layout
