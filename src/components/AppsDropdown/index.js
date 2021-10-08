// icons apps
import slackIcon from './icons/slack.png';
import bitbucketIcon from './icons/bitbucket.png';
import dribbbleIcon from './icons/dribbble.png';
import dropboxIcon from './icons/dropbox.png';
import githubIcon from './icons/github.png';
import gSuiteIcon from './icons/g-suite.png';

const APPS = [
  {
    name: 'Slack',
    icon: slackIcon,
    redirectTo: '/'

  },
  {
    name: 'GitHub',
    icon: githubIcon,
    redirectTo: '/'
  },
  {
    name: 'Dribbble',
    icon: dribbbleIcon,
    redirectTo: '/'
  },
  {
    name: 'Bitbucket',
    icon: bitbucketIcon,
    redirectTo: '/'
  },
  {
    name: 'Dropbox',
    icon: dropboxIcon,
    redirectTo: '/'
  },
  {
    name: 'G Suite',
    icon: gSuiteIcon,
    redirectTo: '/'
  },
];

const AppDropdown = () => {
  const HREF_DEFAULT = '#';
  const apps = APPS || [];
  const chunk_size = 3;
  const appsChunks = Array(Math.ceil(apps.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => apps.slice(begin, begin + chunk_size));

  return (
    <>
      <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href={HREF_DEFAULT} role="button" aria-haspopup="false" >
        <i className="dripicons-view-apps noti-icon"></i>
      </a>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg p-0">
        <div className="p-2">
          {
            appsChunks.map((chunk, i) =>
              <div className="row no-gutters" key={i}>
                {
                  chunk.map((item, j) =>
                    <div className="col" key={j + '-app'}>
                      <a className="dropdown-icon-item" href={item.redirectTo} >
                        <img src={item.icon} alt={item.name} />
                        <span>{item.name}</span>
                      </a>
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};
export default AppDropdown;