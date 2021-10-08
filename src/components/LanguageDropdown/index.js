import enFlag from './flags/us.jpg';
import germanyFlag from './flags/germany.jpg';
import spainFlag from './flags/spain.jpg';
import russiaFlag from './flags/russia.jpg';
import italyFlag from './flags/italy.jpg';

const languages = [
  {
    name: 'English',
    flag: enFlag
  },
  {
    name: 'Germnay',
    flag: germanyFlag
  },
  {
    name: 'Spanish',
    flag: spainFlag
  },
  {
    name: 'Russian',
    flag: russiaFlag
  },
  {
    name: 'Italy',
    flag: italyFlag
  },
];

const LanguageDropdown = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  const selectedLang = languages[1] || {};
  return (
    <>
      <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" id="topbar-languagedrop" href={HREF_DEFAULT} role="button" aria-haspopup="true" >
        <img src={selectedLang.flag}
          alt={selectedLang.name}
          className="mr-1"
          height="12"
        />
        <span className="align-middle">{selectedLang.name}</span><i className="mdi mdi-chevron-down"></i>
      </a>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop">
        {languages.map((item, i) =>
          <a key={i + '-lang'} href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
            <img
              src={item.flag}
              alt={item.name}
              className="mr-1"
              height="12"
            />
            <span className="align-middle">{item.name}</span>
          </a>)
        }
      </div>
    </>
  );
};
export default LanguageDropdown;