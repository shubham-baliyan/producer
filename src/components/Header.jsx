import Kafka from "../assets/kafka.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Kafka} className="header__image" />
      <h2 className="header__h2">Producer</h2>
    </div>
  );
};

export default Header;
