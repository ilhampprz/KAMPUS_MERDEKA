class Earthquake {
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak() {
        if (this.skala > 0 && this.skala <= 2) return 'tidak terasa';
        else if (this.skala > 2 && this.skala <= 4) return 'bangunan retak - retak';
        else if (this.skala > 4 && this.skala <= 6) return 'bangunan roboh';
        else if (this.skala > 6) return 'bangunan roboh dan berpotensi tsunami';
    }

    cetakKeteranganLengkap() {
        return `<td>${this.lokasi}</td><td>${this.skala}</td><td>${this.dampak()}</td>`;
    }
}

const earthquake1 = new Earthquake('Yokohama', 3);
const earthquake2 = new Earthquake('Kyoto', 2);
const earthquake3 = new Earthquake('Kawaguchi', 1.8);
const earthquake4 = new Earthquake('Tateyama', 3.8);
const earthquake5 = new Earthquake('Osaka', 3.2);
const earthquake6 = new Earthquake('Tokyo', 6.2);
const earthquake7 = new Earthquake('Shibuya', 7);
const earthquake8 = new Earthquake('Hiroshima', 5.5);
const earthquake9 = new Earthquake('Chiba', 4);
const earthquake10 = new Earthquake('Nagasaki', 2.8);

const arrVarEarthquake = [earthquake1, earthquake2, earthquake3, earthquake4, earthquake5, earthquake6, earthquake7, earthquake8, earthquake9, earthquake10]

let temp = '';

for (const varEarthquake of arrVarEarthquake) {
    temp += `<tr>${varEarthquake.cetakKeteranganLengkap()}
                </tr>`;
}

const struckturTable =
    `<table><thead><tr class="head-table"><th colspan="3">INFORMASI Earthquake</th></tr><tr><th>Lokasi</th><th>Skala</th><th>Deskripsi</th></tr></thead><tbody>${temp}</tbody></table>`;

document.write(struckturTable);