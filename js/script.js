function showDetails(frameId) {
    const details = {
        personal: `
            Nom : Aliouche Sulayman<br> 
            Âge: 23 ans, né le 28/03/2001<br>
            Localisation : Aulnay-Sous-Bois, 93600<br>
            Téléphone : 07 67 70 68 24<br>
            Email : sulayman.aliouche@gmail.com<br>
            Permis B<br>
        `,
        formation: `
            2022–2024 : Master Informatique – Réseaux (Sorbonne Université)<br>
            2021–2022 : Licence Pro – Administration & Sécurité des Réseaux<br>
            2019–2021 : DUT Réseaux & Télécoms (Université Sorbonne Paris Nord)<br>
            2018–2019 : Bac Scientifique – Lycée Voillaume<br>
        `,
        competences: `
            <strong>Administration réseaux :</strong><br>
            - Mise en place d’un réseau simple/complexe<br>
            - Adressage IPv4 et IPv6<br>
            - Configuration routeurs/switchs/DHCP/DNS<br><br>
            
            <strong>Administration système :</strong><br>
            - Manipulation système de fichiers<br>
            - Configuration droits des groupes/utilisateurs/autres<br>
            - Gestion d’un parc informatique<br>
            - Mise en place de la virtualisation des services<br><br>
            
            <strong>Supervision des réseaux :</strong><br>
            - Configuration/Gestion d’outils de collecte et de trace<br>
            - Méthodologie de la supervision<br>
            - Architecture d'un système de supervision<br><br>
            
            <strong>Bases de données :</strong><br>
            - Créer/Interroger/Manipuler une base de données<br>
            - Configurer des clients et administrer des comptes pour un SGBD<br><br>
            
            <strong>Infrastructures de sécurité :</strong><br>
            - Comprendre une politique de sécurité<br>
            - Connaître les équipements réseaux dédiés à la sécurité<br>
            - Configuration des équipements de sécurité<br>
            - Tunnels VPN<br><br>
            
            <strong>Téléphonie :</strong><br>
            - Analyses/évaluations offres commerciales téléphonies<br>
            - Gestion réseau téléphonique (public & privé)<br>
            - Mise en place et gestion PABX<br>
            - Configuration d’un serveur de ToIP<br>
            - Étude de différentes architectures de ToIP<br><br>
            
            <strong>Système d’exploitation :</strong><br>
            - Linux : Debian – Mageia 4 – Ubuntu<br>
            - Windows Server, 7, 8, 10 & 11 – MacOS<br><br>
            
            <strong>Langages de programmation + Logiciels/Applications :</strong><br>
            - Shell - Python - SQL - HTML/CSS3<br>
            - Pack Office – Wireshark – GNS3 – Marionnet – VirtualBox - Docker
        `,
        experience: `
            <strong>General Electric Healthcare | Alternant Réseau / Connectivité</strong><br>
            - Responsable du taux de connectivité des équipements<br>
            - Cisco ASR : Mise en place de VPN Policy-based, route-based, encryption, hash, etc.<br>
            - Adaptation aux modèles clients (Palo Alto, Zyxel, Stormshield…)<br>
            - Capacité à comprendre et à répondre aux exigences des clients<br>
            - Gestion de tickets N1-N2<br><br>

            <strong>Laboratoire d’Informatique de Paris Nord | Simulation Service Réseau 5G</strong><br>
            - Simulation d'un service réseau 5G (à l'aide de modules OpenSource) en intégrant des exigences SLA<br><br>

            <strong>Cortechs | Technicien support informatique</strong><br>
            - Traitement de tickets niveau N1-N2 (Sur site et Hotline)<br>
            - Gestion d’Active Directory<br>
            - Configuration d’équipements réseaux (Fortinet, Tplink, Netgear…)<br>
            - Outils utilisés: 3CX, SharePoint, PRTG network monitoring, Clé Bootable (Médicat, Hiren et Acronis), Eset Antivirus, Sentinel, Splashtop, TeamViewer…
        `,
        certifications: `
            Certification 3CX Basic
        `,
        interets: `
            Séries : Action, Science-fiction, Fantastique<br>
            Sports : Musculation, Basket
        `,
        langues: `
            Anglais : B2 (TOEIC : 830/990)<br>
            Espagnol : Intermédiaire (A2)
        `,
    };

    document.getElementById('details-content').innerHTML = details[frameId] || "Détails non disponibles.";
}
