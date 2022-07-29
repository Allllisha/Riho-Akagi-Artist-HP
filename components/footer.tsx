import Link from "next/link";
import { GrFacebook } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';

export default  function Footer(){
  return (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>Riho Akagi</h6>
          <p className="text-justify">Riho is a japanese London based <i>PIANIST.</i></p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>SITE MENU</h6>
          <ul className="footer-links">
            <li> <Link href={`/`}>Home</Link></li>
            <li> <Link href={`/about`}>About JP</Link></li>
            <li> <Link href={`/abouts/h37pyymxj`}>About EN</Link></li>
            <li> <Link href={`/blogs`}>News</Link></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="https://www.youtube.com/user/RihoLynne">YouTube</a></li>
            <li><a href="https://soundcloud.com/riho-akagi">SoundCloud</a></li>
        
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
       <a href="#">Allllisha</a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" href="https://www.facebook.com/rihomusic/"><GrFacebook /></a></li>
            <li><a className="twitter" href="https://twitter.com/23Riho"><i className="fa fa-twitter"><GrTwitter /></i></a></li>
            <li><a className="dribbble" href="https://www.instagram.com/riho_akagi/"><i className="fa fa-dribbble"><GrInstagram /></i></a></li>
            <li><a className="linkedin" href="https://www.instagram.com/riho_akagi/"><i className="fa fa-linkedin"><GrLinkedin/></i></a></li>
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}