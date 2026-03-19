import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(getPageHTML())
})

function getPageHTML(): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Andreas Bauten, M.Sc. – Zertifizierter Sachverständiger für Photovoltaikanlagen nach DIN EN ISO/IEC 17024. Unabhängige Gutachten, technische Diagnosen und Beratung.">
  <title>Andreas Bauten, M.Sc. – Sachverständiger für Photovoltaikanlagen</title>
  <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="/static/style.css" rel="stylesheet">
</head>
<body>

  <!-- ══════════════════════════════════════════════════
       SEKTION 1 – HERO-BEREICH / EINFÜHRUNG
       ══════════════════════════════════════════════════ -->
  <section class="hero">
    <div class="container">
      <div class="hero-text">
        <span class="hero-badge">ISO/IEC 17024 ZERTIFIZIERTER SACHVERST&Auml;NDIGER</span>
        <h1>Andreas Bauten, M.Sc.</h1>
        <p class="hero-subtitle">Sachverständiger für Photovoltaikanlagen</p>
        <p>Als unabhängiger, nach DIN EN ISO/IEC 17024 zertifizierter Sachverständiger für Photovoltaikanlagen verbinde ich über ein Jahrzehnt Erfahrung in Energietechnik, Batteriesicherheit und funktionaler Sicherheit mit der Fähigkeit, komplexe technische Sachverhalte verständlich und praxisnah aufzubereiten. Mein Hintergrund als Ingenieur – vom BMS-Entwickler über den Safety Engineer bis hin zum Elektrofahrzeug-Konstrukteur mit TÜV-Abnahme – gibt mir eine Analysetiefe, die weit über die reine PV-Begutachtung hinausgeht.</p>
      </div>
      <div class="hero-image">
        <img src="/static/images/siegel-3d.png" alt="EUcert Zertifizierungssiegel – ISO/IEC 17024 – Andreas Bauten" width="300" height="300">
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════════════
       SEKTION 2 – WARUM DIESER SACHVERSTÄNDIGE
       ══════════════════════════════════════════════════ -->
  <section class="why-section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <h2>Was mich als Sachverständigen auszeichnet</h2>
        <p>Meine Gutachten basieren nicht nur auf normativer Kompetenz, sondern auf jahrelanger praktischer Ingenieursarbeit an Batterie-, Sicherheits- und Hochvoltsystemen – Erfahrungswerte, die in rein theoretischen Prüfberichten fehlen.</p>
      </div>

      <div class="cards-grid">
        <!-- Karte 1 -->
        <div class="card animate-on-scroll">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h3>Fast 10 Jahre Funktionale Sicherheit</h3>
          <p>Seit 2016 arbeite ich kontinuierlich mit den Sicherheitsnormen ISO 26262 und IEC 61508 – von der Gefahrenanalyse (HARA) über FMEA/FTA bis zur Safety-Case-Dokumentation. Diese sicherheitstechnische Denkweise fließt in jedes Gutachten ein: Ich bewerte PV-Anlagen nicht nur nach Ertrag, sondern systematisch nach Risiko- und Schutzkonzepten.</p>
        </div>

        <!-- Karte 2 -->
        <div class="card animate-on-scroll">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
            </svg>
          </div>
          <h3>BMS- &amp; Batterieexperte</h3>
          <p>Entwicklung, Integration und Validierung von Batteriemanagementsystemen (LFP, Na-Ion) nach UN 38.3, ECE R100, UL 991 und UL 1998 – insbesondere für PV-Speichersysteme habe ich ein tiefgehendes Verständnis der Zellchemie, Ladelogik und BMS-Kommunikation, das über das Prüfschema klassischer PV-Gutachter hinausgeht.</p>
        </div>

        <!-- Karte 3 -->
        <div class="card animate-on-scroll">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
            </svg>
          </div>
          <h3>Ingenieur aus Überzeugung</h3>
          <p>M.Sc. Elektrotechnik (RWTH Aachen), Schwerpunkt Energietechnik – mit internationaler Forschungserfahrung (Taiwan, Österreich). Ich bringe nicht nur Normenwissen mit, sondern kann Fehlerbilder auf Komponentenebene analysieren: von der Thermografie über I-V-Kennlinien bis hin zur FEM-Simulation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════════════
       SEKTION 3 – BERUFLICHE MEILENSTEINE
       ══════════════════════════════════════════════════ -->
  <section class="timeline-section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <h2>Berufliche Meilensteine</h2>
      </div>

      <div class="timeline">
        <!-- Meilenstein 1 -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-card">
            <span class="timeline-date">seit 07/2025</span>
            <h3>Sachverständiger für Photovoltaikanlagen</h3>
            <p class="timeline-subtitle">Freiberuflich | ISO/IEC 17024 zertifiziert (EUcert, gültig bis 07/2030)</p>
            <ul>
              <li>Vor-Ort-PV-Bewertungen, technische Diagnosen und Leistungsanalysen</li>
              <li>Normkonforme Gutachten nach DIN/IEC bei Schadensfällen</li>
              <li>Risikobewertung, Dokumentenprüfung und Regulatorik-Beratung</li>
              <li>Beratung zu Reparierbarkeit, Sicherheit und Ertragsoptimierung</li>
            </ul>
          </div>
        </div>

        <!-- Meilenstein 2 -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-card">
            <span class="timeline-date">seit 07/2023</span>
            <h3>Senior Expert BMS | Battery | Validation</h3>
            <p class="timeline-subtitle">PEM Motion GmbH, Aachen</p>
            <ul>
              <li>Entwicklung modularer Batterie- und Energiespeichersysteme (LFP/Na-Ion)</li>
              <li>Tests und Validierung nach UN 38.3, ECE R100, UL 991 &amp; UL 1998</li>
              <li>Safety Engineer für Funktionale Sicherheit (ISO 26262 / IEC 61508)</li>
              <li>Technischer Projektleiter internationaler Energie- und BMS-Projekte</li>
            </ul>
          </div>
        </div>

        <!-- Meilenstein 3 -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-card">
            <span class="timeline-date">10/2020 – 06/2023</span>
            <h3>System Development Manager</h3>
            <p class="timeline-subtitle">Futavis GmbH, Aachen</p>
            <ul>
              <li>Technische Anforderungsspezifikation für BMS &amp; Batteriesysteme</li>
              <li>Safety Manager: Funktionale Sicherheit (ISO 26262) &amp; Cybersecurity (ISO/SAE 21434)</li>
              <li>Qualitätsmanagement nach ISO 9001, IATF 16949 &amp; Lieferantenaudits (VDA 6.3)</li>
            </ul>
          </div>
        </div>

        <!-- Meilenstein 4 -->
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-card">
            <span class="timeline-date">10/2019 – 05/2020</span>
            <h3>System Engineer – Batteriespeicher &amp; E-Mobilität</h3>
            <p class="timeline-subtitle">E-Stream Energy GmbH &amp; Co. KG, Mönchengladbach</p>
            <ul>
              <li>Entwicklung und Konstruktion modularer Batteriespeichersysteme (19''-Rack, marktreif)</li>
              <li>HV-Prüfung und Installation von Batteriesystemen in Elektrofahrzeugen</li>
              <li>Risikobewertung für Batteriekonstruktion und HV-Sicherheitskonzepte</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════════════
       SEKTION 4 – BMW 3 ELEKTRIFIZIERUNG
       ══════════════════════════════════════════════════ -->
  <section class="bmw-section">
    <div class="container">
      <span class="bmw-badge animate-on-scroll">BESONDERES PROJEKT</span>
      <h2 class="animate-on-scroll">Vollständige Elektrifizierung eines BMW 3 (Baujahr 1978)</h2>
      <p class="bmw-subtitle animate-on-scroll">Privates Ingenieursprojekt | 2020–2023 | Mit TÜV-EBE-Abnahme und Straßenzulassung</p>
      <p class="bmw-intro animate-on-scroll">Was als persönliche Leidenschaft begann, wurde zum umfassendsten Kompetenznachweis meiner Ingenieurslaufbahn: die vollständige Elektrifizierung eines klassischen BMW 3er – von der leeren Karosserie bis zur bestandenen TÜV-Einzelbetriebserlaubnis (EBE) für den öffentlichen Straßenverkehr. Dieses Projekt vereint Systemarchitektur, Hochvoltsicherheit, BMS-Engineering und regulatorische Dokumentation auf höchstem Niveau.</p>

      <div class="bmw-content">
        <div class="bmw-details animate-on-scroll">
          <h3>Systemintegration &amp; Entwicklung</h3>
          <ul>
            <li>Eigenständige Entwicklung der vollständigen EV-Antriebsarchitektur</li>
            <li>E-Motor-Auswahl, Integration und Abstimmung mit Inverter &amp; DC/DC-Wandler</li>
            <li>Konstruktion eines maßgeschneiderten Hochvolt-Batteriesystems mit Sicherheitskonzept</li>
            <li>BMS-Auslegung, Parametrierung, Kalibrierung und Validierung (inkl. Bluetooth-Monitoring)</li>
          </ul>

          <h3>Zulassung &amp; Dokumentation</h3>
          <ul>
            <li>Integration von Ladeelektronik (OBC), optimiert für öffentliche und private Ladeinfrastruktur</li>
            <li>Komplettes E/E-Redesign mit CAN-Kommunikation und HV-Freigaben</li>
            <li>Vollständige technische Dokumentation für die TÜV-Prüfung</li>
            <li>Erfolgreiche TÜV-EBE-Abnahme – Nachweis höchster System-, Sicherheits- und Integrationskompetenz</li>
          </ul>
        </div>

        <div class="bmw-gallery-wrapper">
          <!-- Ersetze diese Platzhalter durch reale Projektfotos des BMW 3 Elektrifizierungsprojekts. -->
          <div class="bmw-gallery animate-on-scroll">
            <div class="gallery-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
              <span>Außenansicht des fertigen Fahrzeugs</span>
            </div>
            <div class="gallery-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
              <span>Hochvolt-Batteriesystem im Einbauraum</span>
            </div>
            <div class="gallery-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
              <span>BMS-Integration und Verkabelung</span>
            </div>
            <div class="gallery-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
              <span>Motorraum mit E-Motor und Inverter</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bmw-badges animate-on-scroll">
        <span class="bmw-chip">HV-Kompetenz</span>
        <span class="bmw-chip">TÜV-EBE-Abnahme</span>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════════════
       SEKTION 5 – ZERTIFIZIERUNGEN & QUALIFIKATIONEN
       ══════════════════════════════════════════════════ -->
  <section class="certs-section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <h2>Zertifizierungen &amp; Qualifikationen</h2>
        <p>Offiziell zertifizierte Kompetenz – jede Qualifikation durch anerkannte Institutionen bestätigt.</p>
      </div>

      <div class="certs-grid">
        <!-- Karte 1 – EUcert -->
        <div class="cert-card animate-on-scroll">
          <div class="cert-logo">
            <img src="/static/images/eucert-logo.png" alt="EUcert Logo – Europäische Zertifizierung" loading="lazy">
          </div>
          <h3>ISO/IEC 17024 Sachverständiger</h3>
          <p>Zertifizierter Sachverständiger für Photovoltaikanlagen | EUcert (CYF) | Gültig 2025–2030 | Cert-Nr: 1-25-1092</p>
        </div>

        <!-- Karte 2 – CertX Functional Safety -->
        <div class="cert-card animate-on-scroll">
          <div class="cert-logo">
            <img src="/static/images/certx-logo.png" alt="CertX Logo – Schweizer Zertifizierungsstelle" loading="lazy">
          </div>
          <h3>Functional Safety Red Belt</h3>
          <p>ISO 26262:2018 – Automotive Functional Safety | CertX AG, Schweiz</p>
        </div>

        <!-- Karte 3 – CertX Cybersecurity -->
        <div class="cert-card animate-on-scroll">
          <div class="cert-logo">
            <img src="/static/images/certx-logo.png" alt="CertX Logo – Schweizer Zertifizierungsstelle" loading="lazy">
          </div>
          <h3>Automotive Cyber Security Red Belt</h3>
          <p>ISO/SAE 21434:2021 – Sichere Kommunikations- &amp; Monitoring-Schnittstellen | CertX AG, Schweiz</p>
        </div>

        <!-- Karte 4 – WAW HV -->
        <div class="cert-card animate-on-scroll">
          <div class="cert-logo">
            <img src="/static/images/waw-logo.png" alt="WAW Logo – Westfälisches Ausbildungs-Werk" loading="lazy">
          </div>
          <h3>Hochvolt-Qualifikation – Elektrofachkraft Stufe 3</h3>
          <p>DGUV 200-005 QM 2c &amp; QM 3a – Sicherheitskritisches Arbeiten an Hochvoltsystemen | WAW GmbH &amp; TÜV NORD Bildung</p>
        </div>
      </div>

      <div class="certs-footer animate-on-scroll">
        <p>Zusätzlich: Qualitätserfahrung nach ISO 9001, IATF 16949 sowie Lieferantenaudit-Kompetenz (VDA 6.3)</p>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════════════
       SEKTION 6 – TECHNISCHE KOMPETENZEN
       ══════════════════════════════════════════════════ -->
  <section class="skills-section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <h2>Technische Kompetenzen</h2>
      </div>

      <div class="skills-grid">
        <div>
          <div class="skill-group animate-on-scroll">
            <h3>Mess- &amp; Prüfverfahren</h3>
            <ul>
              <li>Thermografie (Modulhotspots, Anschlussfehler, Dioden-Defekte)</li>
              <li>I-V-Kennlinienmessung &amp; Stringanalyse</li>
              <li>Isolationsmessung &amp; Erdungsprüfung</li>
              <li>Schutzmaßnahmenprüfung nach VDE 0100-712</li>
              <li>Ertragsdiagramm- und Monitoring-Datenanalyse</li>
            </ul>
          </div>

          <div class="skill-group animate-on-scroll">
            <h3>Normen &amp; Standards</h3>
            <ul>
              <li>VDE 0100-712, DIN EN 62446-1, IEC 62933/62619</li>
              <li>ISO 26262, IEC 61508, ISO/SAE 21434</li>
              <li>UN 38.3, ECE R100, DGUV-Regeln</li>
            </ul>
          </div>
        </div>

        <div>
          <div class="skill-group animate-on-scroll">
            <h3>Tools &amp; Software</h3>
            <ul>
              <li>APIS IQ-FMEA, Polarion ALM, CodeBeamer ALM</li>
              <li>Matlab/Simulink, CANoe/CANape</li>
              <li>Altium Designer, LTSpice, PSpice</li>
              <li>ANSYS FEM, LabView</li>
              <li>PV*SOL, PVsyst – PV-Analyse &amp; Simulation</li>
            </ul>
          </div>

          <div class="skill-group animate-on-scroll">
            <h3>Spezielle Expertise</h3>
            <ul>
              <li>Bewertung Moduldegradation (LID/LeTID)</li>
              <li>Analyse typischer Fehlerbilder (PID, Hotspots, Delamination, Mikrorisse)</li>
              <li>Bewertung Batteriespeicher im PV-Kontext (Zellchemie, BMS-Logik, Ladeprofile)</li>
              <li>Risikobasierte Entscheidungsmodelle (FMEA, FTA, HARA)</li>
              <li>Interpretation Monitoring-Systeme (Fronius, SMA, Hoymiles, SolarEdge)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════════════
       SEKTION 7 – STANDORT & KONTAKT-CTA
       ══════════════════════════════════════════════════ -->
  <section class="cta-section">
    <div class="container">
      <h2 class="animate-on-scroll">Standort &amp; Tätigkeitsbereich</h2>
      <p class="animate-on-scroll">Standort: Aachen, Nordrhein-Westfalen. Bundesweit tätig mit Schwerpunkt NRW, Rheinland, Ruhrgebiet und Niederrhein. Online-Gutachten und Ferndiagnosen deutschlandweit möglich.</p>

      <div class="location-tags animate-on-scroll">
        <span class="location-tag">Aachen</span>
        <span class="location-tag">NRW</span>
        <span class="location-tag">Rheinland</span>
        <span class="location-tag">Ruhrgebiet</span>
        <span class="location-tag">Niederrhein</span>
        <span class="location-tag">Bundesweit</span>
      </div>

      <div class="animate-on-scroll">
        <a href="#kontakt" class="cta-button">Jetzt Beratung anfragen</a>
      </div>

      <div class="cta-stamp animate-on-scroll">
        <img src="/static/images/stempel.png" alt="Offizieller Stempel – Andreas Bauten, zertifizierter Sachverständiger" loading="lazy">
      </div>
    </div>
  </section>

  <!-- Scroll Animation Script -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
        observer.observe(el);
      });
    });
  </script>

</body>
</html>`
}

export default app
