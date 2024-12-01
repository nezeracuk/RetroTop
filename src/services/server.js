const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5005;
const jwt = require('jsonwebtoken');
const VERY_SECRET_KEY = 'user_secret_key';
app.use(cors());
app.use(express.json());
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

let users = []
let products = [
    {
        id: 1,
        title: 'Mystic Realms',
        price: 150,
        description: 'Explore ancient worlds filled with mysteries and untold powers.',
        imageUrl: './images/game1.webp',
        Rarity: ['Legendary', 'Epic'],
        age: ['1998', '1999'],
    },
    {
        id: 2,
        title: 'Shadow Quest',
        price: 120,
        description: 'Embark on a journey through dark lands teeming with danger.',
        imageUrl: './images/game2.webp',
        Rarity: ['Epic', 'Rare'],
        age: ['1999', '2000'],
    },
    {
        id: 3,
        title: 'Sunglasses Saga',
        price: 192,
        description: 'A vibrant adventure full of style and unforgettable moments.',
        imageUrl: './images/game3.webp',
        Rarity: ['Legendary', 'Rare'],
        age: ['1998', '1999'],
    },
    {
        id: 4,
        title: 'Joker’s Lair',
        price: 162,
        description: 'Step into the chaotic world of the trickster’s domain.',
        imageUrl: './images/game4.webp',
        Rarity: ['Rare', 'Epic'],
        age: ['1998', '1999'],
    },
    {
        id: 5,
        title: 'Veres Chronicles',
        price: 1000,
        description: 'Uncover the story of a legendary figure and his epic journey.',
        imageUrl: './images/game5.webp',
        Rarity: ['Rare', 'Legendary'],
        age: ['1999', '2000'],
    },
    {
        id: 7,
        title: 'Inferno Blade',
        price: 232,
        description: 'A tale of fire and fury in the battle for ultimate power.',
        imageUrl: './images/game6.webp',
        Rarity: ['Legendary', 'Epic'],
        age: ['1998', '1999'],
    },
    {
        id: 8,
        title: 'Cat God Adventures',
        price: 193,
        description: 'Follow the divine feline on a whimsical and magical quest.',
        imageUrl: './images/game7.webp',
        Rarity: ['Rare', 'Epic'],
        age: ['1999', '2000'],
    },
    {
        id: 9,
        title: 'Pokémon Legacy',
        price: 193,
        description: 'Embark on an epic journey to become the ultimate trainer.',
        imageUrl: './images/game8.webp',
        Rarity: ['Legendary', 'Epic'],
        age: ['1998', '2000'],
    },
    {
        id: 10,
        title: 'Neon Crusade',
        price: 145,
        description: 'Dive into a futuristic world of lights, battles, and glory.',
        imageUrl: './images/game9.webp',
        Rarity: ['Epic', 'Rare'],
        age: ['1999', '2000'],
    }
];

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields must be filled' });
    }

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({ message: 'User with this email not defined' });
    }

    console.log(`${email} is trying to sign in`);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email
        },
        VERY_SECRET_KEY,
        { expiresIn: '24h' }
    );

    console.log(`Token for user ${email}: ${token}`);

    res.json({
        message: 'You signed in',
        token,
        user: {
            username: user.username,
            email: user.email
        }
    });
});

app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'All fields must be filled' });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User with this email not defined' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { username, password: hashedPassword, email };
    users.push(newUser);

    res.status(201).json({
        message: 'User successfully registered',
        user: { username, email },
    });
});

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Token undefined' });

    jwt.verify(token, VERY_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Incorrect token' });
        }
        req.user = user;
        next();
    });
};

app.get('/api/protected', authenticateToken, (req, res) => {
    console.log("Access is allowed", req.user.userId);
    res.json({ message: "You can't do this before login. Login first." });
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'no product' });
    }

    res.json(product);
});

app.post('/logout', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get('/api/products', (req, res) => {
    const { search, sort, Rarity, age } = req.query;

    let filteredProducts = products;

    if (search) {
        const withoudProbiliv = search.trim().toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(withoudProbiliv)
        );
    }

    if (Rarity) {
        filteredProducts = filteredProducts.filter(product =>
            product.Rarity.toLowerCase() === Rarity.toLowerCase()
        );
    }

    if (age) {
        filteredProducts = filteredProducts.filter(product =>
            product.age.includes(age)
        );
    }

    if (sort === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    res.json(filteredProducts);
});