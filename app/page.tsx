'use client';

import { FormEvent, useState } from 'react';
import styles from './page.module.css';

type TabKey = 'home' | 'services' | 'tools';

type GeoSeoProfile = {
  companyName: string;
  summary: string;
  geoScore: number;
  seoScore: number;
  localVisibility: string;
  websiteReadiness: string;
  topSignals: string[];
  recommendedActions: string[];
  address: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [companyName, setCompanyName] = useState('');
  const [profile, setProfile] = useState<GeoSeoProfile | null>(null);
  const [lookupError, setLookupError] = useState('');
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const isHome = activeTab === 'home';
  const isServices = activeTab === 'services';
  const isTools = activeTab === 'tools';

  const handleProfileLookup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedCompanyName = companyName.trim();

    if (!trimmedCompanyName) {
      setLookupError('Please enter a company name to generate a GEO/SEO profile.');
      setProfile(null);
      return;
    }

    try {
      setIsLoadingProfile(true);
      setLookupError('');

      const response = await fetch('/api/geo-seo-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName: trimmedCompanyName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to generate the GEO/SEO profile right now.');
      }

      setProfile(data.profile);
    } catch (error) {
      setProfile(null);
      setLookupError(error instanceof Error ? error.message : 'Something went wrong while generating the profile.');
    } finally {
      setIsLoadingProfile(false);
    }
  };

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
            className={`${styles.navLink} ${isServices ? styles.navLinkActive : ''}`}
            onClick={() => setActiveTab('services')}
            aria-pressed={isServices}
          >
            Services
          </button>
          <button
            type="button"
            className={`${styles.navLink} ${isTools ? styles.navLinkActive : ''}`}
            onClick={() => setActiveTab('tools')}
            aria-pressed={isTools}
          >
            Tools
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.textSection}>
          <div className={styles.badge}>{isHome ? 'Operator intelligence for growing businesses' : isServices ? 'Premier deployment for WhatsApp agents' : 'Instant GEO / SEO company profiling'}</div>
          <h1 className={styles.h1}>dhandaHQ</h1>
          <p className={styles.subhead}>
            {isHome
              ? 'The command center for your business.'
              : isServices
                ? 'We design and install high-touch WhatsApp agents for modern businesses, with concierge deployment and handover.'
                : 'Type your company name and generate a stubbed GEO/SEO profile through an API-powered workflow that is ready for a live integration later.'}
          </p>

          <div className={styles.ctaGroup}>
            {isHome ? (
              <>
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
                <button
                  type="button"
                  className={styles.btnSecondary}
                  onClick={() => setActiveTab('tools')}
                  aria-label="Open Tools"
                >
                  <span className={styles.btnLabel}>Open Tools</span>
                </button>
              </>
            ) : (
              <button
                type="button"
                className={styles.btnSecondary}
                onClick={() => setActiveTab('home')}
                aria-label="Back to Home"
              >
                <span className={styles.btnLabel}>Back Home</span>
              </button>
            )}
          </div>

        </section>

        <section className={`${styles.canvasSection} ${!isHome ? styles.servicesCanvas : ''}`}>
          {isHome ? (
            <>
              <div className={styles.spatialBackdrop} />
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
            </>
          ) : isServices ? (
            <div className={styles.servicesSection}>
              <div className={styles.servicesInner}>
                <div className={styles.servicePanel}>
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
          ) : (
            <div className={styles.toolsSection}>
              <div className={styles.toolsShell}>
                <div className={styles.toolsGlow} />
                <div className={styles.toolsCard}>
                  <div className={styles.toolsHeader}>
                    <div>
                      <p className={styles.toolsKicker}>Stubbed API workflow</p>
                      <h2 className={styles.toolsTitle}>GEO / SEO company profiler</h2>
                    </div>
                    <div className={styles.serviceBadge}>Demo endpoint</div>
                  </div>

                  <p className={styles.toolsDescription}>
                    Enter a business name to simulate a GEO/SEO enrichment call. This currently uses a stubbed API route,
                    so the UI and payload shape are ready before wiring up a live provider.
                  </p>

                  <form className={styles.toolsForm} onSubmit={handleProfileLookup}>
                    <label className={styles.toolsLabel} htmlFor="companyName">
                      Company name
                    </label>
                    <div className={styles.toolsInputRow}>
                      <input
                        id="companyName"
                        className={styles.toolsInput}
                        type="text"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                        placeholder="Ex. Sri Durga Foods"
                        autoComplete="organization"
                      />
                      <button className={styles.toolsButton} type="submit" disabled={isLoadingProfile}>
                        {isLoadingProfile ? 'Generating…' : 'Get profile'}
                      </button>
                    </div>
                    {lookupError ? <p className={styles.toolsError}>{lookupError}</p> : null}
                  </form>

                  <div className={styles.profilePanel}>
                    {profile ? (
                      <>
                        <div className={styles.profileHeader}>
                          <div>
                            <p className={styles.profileEyebrow}>Latest profile</p>
                            <h3 className={styles.profileCompany}>{profile.companyName}</h3>
                          </div>
                          <div className={styles.profileAddress}>{profile.address}</div>
                        </div>

                        <p className={styles.profileSummary}>{profile.summary}</p>

                        <div className={styles.profileScores}>
                          <div className={styles.profileScoreCard}>
                            <span className={styles.profileScoreLabel}>GEO score</span>
                            <strong className={styles.profileScoreValue}>{profile.geoScore}</strong>
                          </div>
                          <div className={styles.profileScoreCard}>
                            <span className={styles.profileScoreLabel}>SEO score</span>
                            <strong className={styles.profileScoreValue}>{profile.seoScore}</strong>
                          </div>
                          <div className={styles.profileScoreCard}>
                            <span className={styles.profileScoreLabel}>Local visibility</span>
                            <strong className={styles.profileScoreValue}>{profile.localVisibility}</strong>
                          </div>
                          <div className={styles.profileScoreCard}>
                            <span className={styles.profileScoreLabel}>Website readiness</span>
                            <strong className={styles.profileScoreValue}>{profile.websiteReadiness}</strong>
                          </div>
                        </div>

                        <div className={styles.profileColumns}>
                          <div className={styles.profileListCard}>
                            <span className={styles.profileListLabel}>Top signals</span>
                            <ul className={styles.profileList}>
                              {profile.topSignals.map((signal) => (
                                <li key={signal}>{signal}</li>
                              ))}
                            </ul>
                          </div>
                          <div className={styles.profileListCard}>
                            <span className={styles.profileListLabel}>Recommended actions</span>
                            <ul className={styles.profileList}>
                              {profile.recommendedActions.map((action) => (
                                <li key={action}>{action}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className={styles.profileEmpty}>
                        <span className={styles.profileEmptyLabel}>Waiting for input</span>
                        <p>
                          Run a lookup to preview how a company profile can be returned from an API and rendered inside
                          the tools workspace.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>


      <footer className={styles.addressFooter}>
        <p className={styles.addressFooterText}>
          Imminent Singularities,
          <br />
          3F-008, T-Hub, Hyderabad
        </p>
      </footer>
    </div>
  );
}
