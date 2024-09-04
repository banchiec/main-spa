import { FooterType } from "./types"
import instagram from "../../assets/images/instagram.png"
import pinterest from "../../assets/images/pinterest.png"
import linkedIn from "../../assets/images/linkedin.png"
import "./footer.scss"
import ButtonCustom from "../buttons/button-custom"
import contactme from "../../assets/images/contactme.png"

const Footer = ( props: FooterType) => {

	const handleClick = () => {
		console.log("click")
	}

	return(
		<div className="klz-footer">
			<div className="klz-footer-container">
				<div className="klz-footer__social-media">
					<div className="klz-footer__social-media__icon">
						<img src={pinterest} alt="Pinterest"/>
					</div>
					<div className="klz-footer__social-media__icon">
						<img src={instagram} alt="Instagram"/>
					</div>
					<div className="klz-footer__social-media__icon">
						<img src={linkedIn} alt="LinkedIn"/>
					</div>
				</div>
				<div>
					<ButtonCustom label={"Chat"} onClick={() => handleClick()} icon={contactme} color="#42fbff"/>
				</div>
				<div className="klz-footer__contactme">
					<h4>klausjohannes@art.com</h4>
				</div>
			</div>
		</div>
	)
}
export default Footer 