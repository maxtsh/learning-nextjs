import Link from "next/link";
import { HeaderContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Next Events</Link>
          </li>
          <li>
            <Link href={"/events"}>Browse</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};
export default Header;
