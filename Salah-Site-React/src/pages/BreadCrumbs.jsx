import {useLocation, Link} from 'react-router-dom'

function BreadCrumbs() {
    const location = useLocation();
    console.log(location);
    let currentLink = '';

    let crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`; // /about/faq
            return (
                <div className='crumb' key={crumb} >
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

  return (
      <div className="breadcrumbs">{crumbs}</div>
  )
}

export default BreadCrumbs