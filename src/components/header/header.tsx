import { ArrowLeft, HamburgerMenu } from "../../assets/icons"
import { HeaderType } from "./types"
import { useState } from "react"
import Sidebar from "../sidebar"
import logo from "../../assets/images/logo.png"
import contactme from "../../assets/images/contactme.png"
import ContactMeModal from "../contact-me-modal"
import { menuHeaderDesktop, menuHeaderSidebar } from "../../config/menus"
import "./header.scss"
import { Link, useNavigate } from "react-router-dom"


const Header = (props: HeaderType) => {
	const [visible, setVisible] = useState(false)
	const [visibleModal, setVisibleModal] = useState(false)
	const navigate = useNavigate()

	const handleClick = () => {
		setVisible(!visible)
	}

	return (
		<>
			<div className="klz-header">
				<div className="klz-header__desktop">
					<div className="klz-header__desktop__logo">
						<img src={logo} alt="image__logo"/>
					</div>
					<div className="klz-header__desktop__menu">
						<ul>
							{menuHeaderDesktop.map((item)=> (
								<Link to={item.url} key={item.label}>
									<li key={item.label}>{item.label}</li>
								</Link>
							))}
						</ul>
						<div className="klz-header__desktop__button-contactme">
							<button onClick={() => setVisibleModal(true)}> <img src={contactme} alt="contact me"/>Contact Me</button>
						</div>
					</div>
				</div>
				<div className="klz-header__mobile">
					<div className="klz-header__arrow-back" onClick={() => navigate(-1)}>
						<ArrowLeft/>
					</div>
					<div className="klz-header__hamburger-menu" onClick={handleClick}>
						<HamburgerMenu />
					</div>
				</div>
			</div>
			{visibleModal && (
				<ContactMeModal setVisible={setVisibleModal}/>
			)}
			{visible && (
				<Sidebar data={menuHeaderSidebar} setVisible={setVisible} />
			)}
		</>
	)
}
export default Header 