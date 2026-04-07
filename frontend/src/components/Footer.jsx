export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div className="grid grid-flow-col gap-4">
        <a href="#" className="link link-hover">
          About us
        </a>
        <a href="#" className="link link-hover">
          Contact
        </a>
        <a href="#" className="link link-hover">
          Privacy Policy
        </a>
        <a href="#" className="link link-hover">
          Terms of Service
        </a>
      </div>
      <div>
        <p>Copyright © {currentYear} DeliveryParcel. All rights reserved.</p>
      </div>
    </footer>
  )
}
