document.getElementById('ordenlighed').addEventListener('click', ordFunction);

function ordFunction() {
  document.body.innerHTML +=(
    `
    <div class="ordenlighedPopup popupCardMaal">
      <article class="ordenlighedIndhold maalIndehold">
        <img
          src="./assets/pictures/picMaalsaetninger/ordenlighedBillede.png"
          alt="Ordenlighed billede" />
        <h3>Ordenlighed</h3>
        <p>
          Vi respekterer hinanden, medspillere som modspillere samt dommere,
          så fodbold bliver en god oplevelse. Vi forventer at alle forældre
          overholder DBU’s forældreråd, og trænerne overholder “Den gode
          træner” (se “Den blå tråd”) og altid husker på, at vi
          repræsenterer Aalborg KFUM i træning og kamp.
        </p>
        <button class="lukKnap">Luk</button>
      </article>
    </div>`
  );
  document
    .querySelector('.ordenlighedPopup .lukKnap')
    .addEventListener('click', (e) => e.currentTarget.closest('.ordenlighedPopup').remove());
}

//Faelleskab 
document.getElementById('faellesskab').addEventListener('click', faelFunction);

function faelFunction() {
  document.body.innerHTML +=(
    `<div class="faellesskabPopup popupCardMaal">
          <article class="faellesskabIndhold maalIndehold">
            <img
              src="./assets/pictures/picMaalsaetninger/faellesskabBillede.png"
              alt="Fællesskab billede"
            />
            <h3>Fællesskab</h3>
            <p>
              Vi lægger vægt på kammeratskab og sammenhold, og vi har fokus på
              at skabe et godt sportsligt og socialt miljø. Foreningen er i sig
              selv et fællesskab. Alle yder selv en aktiv indsats for at styrke
              foreningen og fællesskabet og engagerer sig som frivillig i at få
              fællesskabet til at vokse. Foreningen er større end holdet – og
              holdet er større end individet.
            </p>
            <button class="lukKnap" onclick="lukFaellesskab()">Luk</button>
          </article>
        </div>`
  );
  document
    .querySelector('.faellesskabPopup .lukKnap')
    .addEventListener('click', (e) => e.currentTarget.closest('.faellesskabPopup').remove());
}

//Udvikling
document.getElementById('udvikling').addEventListener('click', udvFunction);

function udvFunction() {
  document.body.innerHTML +=(
    `<div class="udviklingPopup popupCardMaal">
          <article class="udviklingIndhold maalIndehold">
            <img
              src="./assets/pictures/picMaalsaetninger/udviklingBillede.png"
              alt="Udvikling billede"
            />
            <h3>Udvikling</h3>
            <p>
              Vi tilstræber et miljø, hvor vi udfordrer hinanden – menneskeligt
              og sportsligt – og yder alle en fair behandling. Vi har fokus på
              det mentale (trivsel, glæde, motivation og kompetence) i forhold
              til udvikling af holdet, den enkelte spiller, samt fokus på, at vi
              kontinuerligt udvikler klubben med det formål at fastholde flest
              muligt i fodbolden.
            </p>
            <button class="lukKnap" onclick="lukUdvikling()">Luk</button>
          </article>
        </div>`
  );
  document
    .querySelector('.udviklingPopup .lukKnap')
    .addEventListener('click', (e) => e.currentTarget.closest('.udviklingPopup').remove());
}