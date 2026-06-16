/* global React */

function Logo({ night }) {
  return (
    <a href="#top" className="logo" aria-label="The Conditions home">
      <svg className="logo-mark" viewBox="0 0 28 28" aria-hidden="true">
        <circle cx="14" cy="14" r="12.5" fill="none" stroke={night ? "var(--on-night-2)" : "var(--ink)"} strokeWidth="1.4"/>
        <path d="M7 17.5 C 10 9, 13 9, 14 13.5 C 15 18, 18 18, 21 10.5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="logo-word" style={{ color: night ? "var(--on-night)" : "var(--ink)" }}>
        The <span className="logo-lab">Conditions</span>
      </span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const links = [
    ["The diagnostic", "#method"],
    ["Check-in", "#checkin"],
    ["Development", "#workshops"],
    ["How it works", "How It Works.html"],
  ];
  return (
    <header className={"nav" + (scrolled || open ? " scrolled" : "")}>
      <div className="nav-inner wrap">
        <Logo />
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a href="#checkin" className="btn btn-primary nav-cta">Run the (free) check-in</a>
        <button
          className={"nav-toggle" + (open ? " open" : "")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={"nav-mobile" + (open ? " open" : "")}>
        <nav className="nav-mobile-links">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a href="#checkin" className="btn btn-primary nav-mobile-cta" onClick={() => setOpen(false)}>
          Run the (free) check-in
        </a>
      </div>
    </header>
  );
}

const HERO_COPY = {
  A: {
    eyebrow: "The conditions for people to thrive at work",
    head: ["Flourishing shouldn't be reserved for", ["top performers", "."]],
  },
  B: {
    eyebrow: "The conditions for people to thrive at work",
    head: ["Everyone has a path to becoming a", ["flourishing contributor", "."]],
  },
};

function Hero({ variant = "A" }) {
  const c = HERO_COPY[variant] || HERO_COPY.A;
  return (
    <section className="hero section" id="top">
      <div className="wrap">
        <div className="hero-visual reveal">
          <image-slot
            id="hero-team"
            class="hero-img"
            shape="rounded"
            radius="20"
            src={typeof window !== "undefined" ? window.__HERO_IMG : undefined}
            placeholder="Drop a hero image: a real team mid-work, not performing for the camera"
          ></image-slot>
        </div>

        <div className="hero-copy">
          <span className="eyebrow reveal">{c.eyebrow}</span>
          <h1 className="h-display hero-head reveal">
            {c.head[0]} <span className="accent-ital">{c.head[1][0]}</span>{c.head[1][1]}
          </h1>
          <div className="hero-sub reveal">
            <p className="lede">
              We show you where every person stands today — then pinpoint
              the development that moves each of them toward becoming a flourishing
              contributor.
            </p>
          </div>
          <div className="hero-cta reveal">
            <a href="#checkin" className="btn btn-primary">
              Run the 5-minute check-in
              <svg className="arrow" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#method" className="btn btn-ghost">See where your team lands</a>
          </div>
          <p className="hero-trust reveal">
            A clear read on every person — and a path for each one toward flourishing.
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Logo, HERO_COPY });
