import { StyledAnchor, StyledTitle } from "../../styles/typography";
import { StyledNav } from "./style";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

export function Nav() {
  return (
    <StyledNav>
      <div>
        <div>
          <StyledTitle number={5}>RecipeApp</StyledTitle>
        </div>

        <ul>
          <li>
            <StyledAnchor href="#" color="golden">
              <FaInstagram size={19} />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#" color="golden">
              <IoLogoYoutube  size={20} />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#" color="golden">
              <FaFacebook size={18} />
            </StyledAnchor>
          </li>
        </ul>
      </div>
      <ul>
        <div>
          <li>
            <StyledAnchor href="#">Recipes</StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#">About</StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#">Contact</StyledAnchor>
          </li>
        </div>
        <div>
        <li>
            <StyledAnchor href="#" color="golden">
              <FaInstagram size={19} />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#" color="golden">
              <IoLogoYoutube  size={20} />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#" color="golden">
              <FaFacebook size={18} />
            </StyledAnchor>
          </li>
        </div>
      </ul>
    </StyledNav>
  );
}
