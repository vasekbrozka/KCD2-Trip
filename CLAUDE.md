# KCD2-Trip — kontext projektu

## Co to je
Jednosouborová PWA aplikace s itinerářem víkendového výletu do Českého ráje
**po stopách hry Kingdom Come: Deliverance II** (mapa „Trosecko" ve hře odpovídá
reálné krajině kolem hradu Trosky).

- **Kdo:** Vašek + kamarád, jedou autem
- **Kdy:** pátek 17. 7. 2026 (odjezd z Blovic ~12:00) až neděle 19. 7. 2026 (návrat odpoledne)
- **Kde spí:** hotel v Turnově (2 noci; konkrétní hotel zatím neupřesněn)
- **Priority:** hezké procházky (LIMIT ~5 km chůze denně — neměnit bez vyžádání!),
  místa související se hrou, dobré jídlo, večer pivo. Časy v itineráři musí být reálné.

## Nasazení
- **GitHub Pages**: Deploy from a branch → `main` + `/ (root)`
- **Živá adresa:** https://vasekbrozka.github.io/KCD2-Trip
- Uživatel má appku připnutou na ploše iPhonu (Safari → Přidat na plochu)
- Po každém pushi do `main` se web sám přenasadí (~1–2 min)

## Soubory
| Soubor | Účel |
|---|---|
| `index.html` | Celá appka — HTML + CSS + JS v jednom, ŽÁDNÉ externí závislosti (fonty, CDN, knihovny) |
| `manifest.json` | PWA manifest (standalone, ikony) |
| `sw.js` | Service worker, cache-first — cache jméno `kcd2-v1` |
| `icon-180.png`, `icon-512.png` | Ikona: silueta Trosek (zlatá) na zeleném gradientu |

## Pravidla úprav (důležité!)
1. **Po každé změně obsahu zvyš verzi cache v `sw.js`** (`kcd2-v1` → `kcd2-v2` → …),
   jinak uživatel v telefonu uvidí starou verzi.
2. Zachovej strukturu: záložky **Pátek / Sobota / Neděle / Místa** (Místa = katalog
   lokací ze hry i reality s fotkami a odkazy). Sobota má jen jednu variantu (akce).
   Navigace je spodní lišta (bottom tab bar).
3. Zachovej: češtinu, tmavý+světlý režim (prefers-color-scheme), safe-area insets,
   systémové fonty (kulaté — ui-rounded / SF Pro Rounded), vše offline-schopné
   (žádné externí requesty). Barevnost = KCD paleta (pergamen + zlato + rubriková
   červeň, „středověký" nádech). UI je moderní (Instagram/Duolingo styl) — karty
   s fotkou nahoře, časové „pilulky", stlačitelná tlačítka.
4. Žádné localStorage/sessionStorage — stav jen v paměti.
5. Auto-výběr aktuálního dne funguje jen 17.–19. 7. 2026; po výletě zobrazí
   hlavička „Krásné vzpomínky".
6. Commit messages česky, stručné. Po každé úpravě commit + push do `main`
   a napsat uživateli shrnutí změn.

## Klíčová fakta o výletu (ověřeno 12. 7. 2026)
- **Ubytování: Bohemia Inn Hotel ★★★★**, 5. května 63, Turnov 511 01,
  tel. +420 770 600 795 (check-in 15–19, check-out 7–11; pá 17. – ne 19. 7.).
- **Vstupenky na akci KOUPENÉ** (12. 7. 2026): 2 os. základní, 680 Kč,
  kód 10031225632 (QR kóduje 813631911290). QR je přímo v appce na záložce Sobota.
- **Plán dnů (aktualizováno uživatelem):** pátek = příjezd + hotel (na Trosky se
  NEJDE), sobota = celý den akce Pod praporem Bergowa na Troskách, neděle =
  procházka Podtroseckými údolími (~5 km) + odjezd. Hruboskalsko a Valdštejn jsou
  jen „tipy navíc" v Místech.
- Odkaz na nedělní trasu = Mapy.cz `https://mapy.cz/s/nazevocoho` (na iPhonu se
  otevře v aplikaci Mapy); ostatní mapové odkazy = Google Maps.
- **Sobota 18. 7. 2026 = celodenní KCD2 akce „Pod praporem Bergowa" na Troskách**
  (dobové ležení družiny Oty z Bergova; loni 9–21 h, 300/240 Kč, razítko pro
  opakovaný vstup, zákaz psů a zbraní/replik). Vstupenky:
  https://weblist-npu.colosseum.eu/Tours?mrsid=208 — loni se sobota vyprodala.
- **V sobotu 18. 7. NEJEDE běžný okruh hradem** → prohlídka Trosek je v itineráři
  v pátek (otevřeno denně 9:00–17:30, okruh „Celým hradem" 160/130 Kč).
- Na hradě 5 + v Troskovicích 1 QR panel porovnávající hru s realitou.
- Oficiální 14km trasa „Po stopách KCD II" (Vidlák–Věžák–Podsemín–Semín–Nebákov–
  Troskovice–Trosky) je moc dlouhá → v appce jen ploché úseky kolem rybníků (3–5 km).
- Exkurze pivovaru Rohozec (varianta B): so 10/13/15 h, 150 Kč, rezervace ~týden
  předem (exkurze@pivorohozec.cz, +420 481 321 219).
- Kontakt hrad Trosky: trosky@npu.cz, +420 602 342 627.
- Reálná místa vs. hra: Trosky=sídlo Oty z Bergova; Troskovice=Troskowitz (krčma);
  Podsemínský mlýn=mlynář Krejzl (stealth); hradiště Semín=svatba; mlýn Nebákov=
  úkryt pašeráků; rybníky Vidlák a Věžák=setkání šlechticů/přepadení; skály Apolena.
- Jídlo/pivo: Turnovská pivnice Na Lukách + U Prince (Měšťanský pivovar Turnov),
  Rohozecká restaurace (pivovar Malý Rohozec), Restaurace Nebákov, Bistro pod Troskami.

## Zásobník nápadů (zatím nerealizováno)
- Odškrtávací checklist „co s sebou" (stav jen v paměti, ne localStorage)
- Srovnávací fotky hra vs. realita u jednotlivých míst
- Případné počasí / poznámky na míru po rozhodnutí varianty A vs. B

## Historie
Appka vznikla 12. 7. 2026 v Claude (Cowork) session z rešerše výletu; podrobný
itinerář existuje i jako `vylet-kcd2-cesky-raj.md` v té konverzaci. Uživatel
nahrává soubory ručně přes GitHub web; cílem této session je, aby Claude Code
pushoval úpravy sám.
