'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'services'>('home');
  const isHome = activeTab === 'home';

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <button
            type="button"
            className={`${styles.navLink} ${isHome ? styles.navLinkActive : ''}`}
            onClick={() => setActiveTab('home')}
            aria-pressed={isHome}
          >
            Home
          </button>
          <button
            type="button"
            className={`${styles.navLink} ${!isHome ? styles.navLinkActive : ''}`}
            onClick={() => setActiveTab('services')}
            aria-pressed={!isHome}
          >
            Services
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.textSection}>
          <h1 className={styles.h1}>dhandaHQ</h1>
          <p className={styles.subhead}>The command center for your business.</p>

          <div className={styles.ctaGroup}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={() => setActiveTab('services')}
              aria-label="View Services"
            >
              <span className={styles.btnLabel}>View Services</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </button>
          </div>
        </section>

        <section className={styles.canvasSection}>
          <div className={styles.spatialBackdrop} />

          {isHome ? (
            <div className={styles.spatialScene}>
              <svg className={styles.splines} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path className={styles.splineGlow} d="M160 120 C 300 120, 200 300, 300 300" />
                <path className={styles.splinePath} d="M160 120 C 300 120, 200 300, 300 300" />
                <path className={styles.splineGlow} d="M130 420 C 250 420, 200 300, 300 300" />
                <path className={styles.splinePath} d="M130 420 C 250 420, 200 300, 300 300" />
                <path className={styles.splineGlow} d="M410 150 C 350 150, 400 300, 300 300" />
                <path className={styles.splinePath} d="M410 150 C 350 150, 400 300, 300 300" />
                <path className={styles.splineGlow} d="M440 480 C 350 480, 400 300, 300 300" />
                <path className={styles.splinePath} d="M440 480 C 350 480, 400 300, 300 300" />
              </svg>

              <div className={`${styles.node} ${styles.cardVideo} ${styles.node1}`} style={{ ['--tz' as any]: '34px' }}>
                <div className={styles.cardVideoHeader}>
                  <div className={styles.avatar} />
                  <div style={{ flex: 1 }}>
                    <div className={styles.nodeHeading}>Owner’s Dashboard</div>
                    <div className={styles.nodeSubheading}>Cash, runway, and working capital.</div>
                  </div>
                </div>
                <div className={styles.nodeKpiRow}>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>Free cash flow</div>
                    <div className={styles.nodeKpiValue}>+₹3.4L</div>
                  </div>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>Runway</div>
                    <div className={styles.nodeKpiValue}>7.8 mo</div>
                  </div>
                </div>
                <div className={`${styles.metaLabel} ${styles.lbl1}`}>DISCIPLINE</div>
              </div>

              <div className={`${styles.node} ${styles.cardVideo} ${styles.node2}`} style={{ ['--tz' as any]: '12px' }}>
                <div className={styles.cardVideoHeader}>
                  <div className={styles.avatar} />
                  <div style={{ flex: 1 }}>
                    <div className={styles.nodeHeading}>Pricing & Margin</div>
                    <div className={styles.nodeSubheading}>Price moves, discounting, and contribution margin.</div>
                  </div>
                </div>
                <div className={styles.nodeKpiRow}>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>Gross margin</div>
                    <div className={styles.nodeKpiValue}>41.2%</div>
                  </div>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>Price moves</div>
                    <div className={styles.nodeKpiValue}>+2</div>
                  </div>
                </div>
                <div className={`${styles.metaLabel} ${styles.lbl1}`}>UNIT ECONOMICS</div>
              </div>

              <div className={`${styles.node} ${styles.cardVideo} ${styles.node3}`} style={{ ['--tz' as any]: '44px' }}>
                <div className={styles.cardVideoHeader}>
                  <div className={styles.avatar} />
                  <div style={{ flex: 1 }}>
                    <div className={styles.nodeHeading}>Receivables</div>
                    <div className={styles.nodeSubheading}>Invoices, payment timing, and customer risk.</div>
                  </div>
                </div>
                <div className={styles.nodeKpiRow}>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>DSO</div>
                    <div className={styles.nodeKpiValue}>23 d</div>
                  </div>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>At risk</div>
                    <div className={styles.nodeKpiValue}>₹68k</div>
                  </div>
                </div>
                <div className={`${styles.metaLabel} ${styles.lbl1}`}>CASH CONVERSION</div>
              </div>

              <div className={`${styles.node} ${styles.cardVideo} ${styles.node4}`} style={{ ['--tz' as any]: '22px' }}>
                <div className={styles.cardVideoHeader}>
                  <div className={styles.avatar} />
                  <div style={{ flex: 1 }}>
                    <div className={styles.nodeHeading}>Inventory</div>
                    <div className={styles.nodeSubheading}>Stock levels, aging, and replenishment signals.</div>
                  </div>
                </div>
                <div className={styles.nodeKpiRow}>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>Turns</div>
                    <div className={styles.nodeKpiValue}>9.1x</div>
                  </div>
                  <div className={styles.nodeKpi}>
                    <div className={styles.nodeKpiLabel}>Aging</div>
                    <div className={styles.nodeKpiValue}>12%</div>
                  </div>
                </div>
                <div className={`${styles.metaLabel} ${styles.lbl1}`}>CAPITAL EFFICIENCY</div>
              </div>
            </div>
          ) : (
            <div className={styles.servicesSection}>
              <div className={styles.servicesInner}>
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
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
