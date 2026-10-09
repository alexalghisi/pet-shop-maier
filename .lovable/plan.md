# Magazin online PetShop Mayer (SEO first)

## Ce vor vedea clienții
- **/produse** – toate produsele, cu poză, nume și preț în lei, filtrare pe categorii (câini, pisici, furaje, accesorii).
- **/produse/<nume-produs>** – pagină separată pentru fiecare produs: galerie (până la 10 poze sau video), descriere, preț, buton „Adaugă în coș”.
- **Coș** (iconiță în meniu) – modifici cantitățile, vezi totalul, apeși „Plătește cu cardul”.
- **Plata cu cardul** prin Stripe, apoi pagina „Mulțumim, comanda e confirmată”.
- **WhatsApp** – buton plutitor verde pe toate paginile, plus în meniu și în subsol, lângă telefon (+40 758 639 799). Pe fiecare produs: „Întreabă pe WhatsApp despre acest produs”.
- Design: mai bogat decât acum, ca la pet shop-urile online: fundal alb, carduri de produs cu preț vizibil, categorii cu iconițe, secțiune „Produse noi” pe prima pagină.

## Panoul /admin (doar pentru tine)
- Te autentifici cu email și parolă (doar contul tău are acces).
- Adaugi, editezi și ștergi produse: denumire, titlu SEO, descriere, preț, categorie, stoc da/nu, până la 10 poze sau video (tragi fișierele).
- Lista comenzilor plătite: ce s-a cumpărat, cine, total, dată.

## SEO (pe primul loc)
- Fiecare produs are adresă proprie, titlu și descriere pentru Google, construite din ce scrii în admin (titlul SEO).
- Date structurate „Product” cu preț în RON și disponibilitate, ca Google să poată afișa prețul direct în căutări.
- Sitemap automat cu toate paginile și produsele, ca Google să le găsească imediat.
- Ghidurile existente (hrană câini, pisici, furaje) primesc legături spre produsele din categoria lor.
- Paginile se încarcă gata completate pentru Google (nu goale).

## De reținut
- Plățile cer planul Pro Lovable. La început merg în **mod test** (fără bani reali); pentru bani reali îți revendici contul Stripe și îl verifici.
- Pentru produse fizice Stripe calculează TVA-ul, dar declararea ți-o faci tu.
- Livrarea: o întrebare la final (ridicare din magazin, curier sau ambele, cost transport).

## Detalii tehnice
- Lovable Cloud: tabele `products`, `product_media`, `orders`, `order_items`, `user_roles` (rol admin, verificat pe server); spațiu de stocare public pentru poze/video.
- Cumpărături: coș în browser; checkout pe server cu prețurile citite din baza de date (nu din browser), sume dinamice la Stripe; webhook marchează comanda plătită.
- Rute: `/produse`, `/produse/$slug`, `/cos`, `/comanda-confirmata`, `/admin` (protejat), `/sitemap.xml`.
- Produsele se încarcă în loader cu React Query, `head()` per produs cu og:image din poza produsului.
