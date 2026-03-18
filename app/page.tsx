'use client';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <a href="#">Platform</a>
          <a href="#">Pricing</a>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.textSection}>
          <h1 className={styles.h1}>dhandaHQ</h1>
          <p className={styles.subhead}>The command center for your business.</p>

          <div className={styles.ctaGroup}>
            <button className={styles.btnPrimary} aria-label="Start">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </button>
            <span className={styles.ctaText}>Get Started</span>
          </div>
        </section>

        <section className={styles.canvasSection} aria-hidden="true">
          <div className={styles.spatialBackdrop} />
          <div className={styles.spatialScene}>
            <svg className={styles.splines} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
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
                  <div className={styles.nodeSubheading}>Cash, runway, and working capital — at a glance.</div>
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
                  <div className={styles.nodeSubheading}>Protect gross margin before chasing volume.</div>
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
                  <div className={styles.nodeSubheading}>Tighten collections. Reduce bad debt quietly.</div>
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
                  <div className={styles.nodeSubheading}>Cut dead stock. Buy only what turns.</div>
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

            <div className={styles.nodeInsight}>
              <div className={`${styles.metaLabel} ${styles.lbl2}`}>CORE_NODE</div>
              <div className={styles.insightCore}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
