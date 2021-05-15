const initialState = [
    {
        id: 1,
        name: 'William Doe',
        start: '4:30 AM',
        stop: '5:00 AM',
        phone: '+48 603 433 955',
        email: 'contacts@codegate.pl',
        type: 'Warmup'
    },
    {
        id: 2,
        name: 'Tomas Adision',
        start: '7:00 AM',
        stop: '8:00 AM',
        phone: '+48 603 433 956',
        email: 'tomas@codegate.pl',
        type: 'VIP'
    },
    {
        id: 3,
        name: 'Barak Obama',
        start: '8:00 AM',
        stop: '8:30 AM',
        phone: '+48 603 433 957',
        email: 'obama@codegate.pl',
        type: '1:1'
    }
];

localStorage.setItem('redux-store', JSON.stringify(initialState));
console.log('data')