'use client';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <a href="#">Tools</a>
          <a href="#services">Services</a>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.textSection}>
          <h1 className={styles.h1}>dhandaHQ</h1>
          <p className={styles.subhead}>The command center for your business.</p>

          <div className={styles.ctaGroup}>
            <a className={styles.btnPrimary} href="#services" aria-label="View Services">
              <span className={styles.btnLabel}>View Services</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>
        </section>

        <section className={styles.canvasSection} id="services">
          <div className={styles.servicePanel}>
            <div className={styles.serviceEyebrow}>Services</div>
            <div className={styles.serviceShell}>
              <div className={styles.serviceGlow} />
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div>
                    <p className={styles.serviceKicker}>Premier Deployment</p>
                    <h2 className={styles.serviceTitle}>WhatsApp agents for businesses</h2>
                  </div>
                  <div className={styles.serviceBadge}>Concierge setup</div>
                </div>

                <p className={styles.serviceDescription}>
                  We design and install high-touch WhatsApp agents for modern businesses — including OpenClaw,
                  Hermes, and other custom agent workflows tailored to sales, support, follow-ups, and operations.
                </p>

                <div className={styles.serviceHighlights}>
                  <div className={styles.serviceHighlight}>
                    <span className={styles.highlightLabel}>Agent stack</span>
                    <span className={styles.highlightValue}>OpenClaw, Hermes & more</span>
                  </div>
                  <div className={styles.serviceHighlight}>
                    <span className={styles.highlightLabel}>Use cases</span>
                    <span className={styles.highlightValue}>Sales, support, booking, ops</span>
                  </div>
                  <div className={styles.serviceHighlight}>
                    <span className={styles.highlightLabel}>Delivery</span>
                    <span className={styles.highlightValue}>Installation, configuration, handover</span>
                  </div>
                </div>

                <div className={styles.serviceFooter}>
                  <a
                    className={styles.whatsappButton}
                    href="https://wa.me/917799022048?text=Hi%2C%20I%20want%20to%20get%20a%20whatsapp%20agent.%20Please%20tell%20me%20the%20next%20steps."
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Contact on WhatsApp"
                  >
                    <span>Get your WhatsApp agent</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
