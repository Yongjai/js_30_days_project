// 영상 속의 데이터를 그대로 가져옴.
const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

// TODO: 아래 조건에 맞춘 코드 작성하기
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const peoples = inventors.filter(d => (d.year >= 1500 && d.year < 1600));
console.log(peoples);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const names = inventors.map(d => [d.first, d.last]);
console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const years = inventors.sort((a, b) => a.year - b.year);
console.log(years);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const lives = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(lives);

// 5. Sort the inventors by years lived
const oldest = inventors.sort( (a, b) => {
    const c = a.passed - a.year;
    const d = b.passed - b.year;
    return c - d
});
console.log(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const lastNames = inventors.sort( (a, b) => {
    const c = a.last.toLowerCase();
    const d = b.last.toLowerCase();

    return c > d ? 1 : -1
});
console.log(lastNames);