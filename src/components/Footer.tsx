const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Axiswin Technologies
            </h3>
            <p className="text-secondary-foreground/80">
              Engineering innovative embedded systems and IoT solutions for a smarter tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Embedded Product Development</li>
              <li>IoT Solutions</li>
              <li>AI & Edge Computing</li>
              <li>Corporate Training</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>+91-7845492448</li>
              <li>ksconsultancycbe@gmail.com</li>
              <li>Coimbatore – 641110</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Axiswin Technologies - A division of KS Consultancy. All rights reserved.</p>
          <p className="mt-2 text-sm">GSTIN: 33ETCPK3823A1ZA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
