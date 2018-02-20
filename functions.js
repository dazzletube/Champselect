/* Funktion: Gibt eine gante (!) Zufallszahl im Intervall [min, max] aus, wobei min und max im Intervall enthalten sind.
   Beispiel: erzeugeZufallszahl(2,8); gibt eine ganze Zufallszahl größergleich 2 und kleinergleich 8 zurück.
   # Übergabe: Minimum (min), Maximum (max)
   @ Rückgabe: zufallszahl
*/
function erzeugeZufallszahl(min, max){
	/* [...] TO DO [...] */
	zufallszahl = Math.floor(Math.random() * (max - min +  1)) + min;
	return zufallszahl;
}