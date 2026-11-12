import Link from 'next/link';
import Seo from '@/components/Seo/Seo';
import styles from './404.module.css';

const NotFound: React.FC = () => (
  <>
    <Seo
      title="Page introuvable | Auto Spa Detailing Tanger"
      description="Cette page n'existe pas ou a été déplacée."
      path="/404"
      noindex
    />
    <main className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page introuvable</h1>
      <p className={styles.text}>Cette page n&apos;existe pas ou a été déplacée.</p>
      <ul className={styles.links}>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/services/ceramique">Traitement céramique</Link></li>
        <li><Link href="/services/ppf">Film PPF</Link></li>
        <li><Link href="/packs">Packs</Link></li>
        <li><Link href="/galerie">Galerie</Link></li>
      </ul>
    </main>
  </>
);

export default NotFound;
