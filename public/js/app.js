// Configuration
const API_BASE = '/api/v1'; // Updated to match NestJS global prefix

// Sample data (will be replaced by API calls when backend is ready)
const SAMPLE_TOURS = [
  {
    _id: '5c88fa8cf4afda39709c2951',
    name: 'The Forest Hiker',
    duration: 5,
    maxGroupSize: 25,
    difficulty: 'easy',
    price: 397,
    summary: 'Breathtaking hike through the Canadian Banff National Park',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageCover: 'tour-1-cover.jpg',
    images: ['tour-1-1.jpg', 'tour-1-2.jpg', 'tour-1-3.jpg'],
    ratingsAverage: 5,
    ratingsQuantity: 9,
    startDates: [
      '2021-04-25T09:00:00.000Z',
      '2021-07-20T09:00:00.000Z',
      '2021-10-05T09:00:00.000Z',
    ],
    locations: [
      {
        description: 'Banff National Park',
        day: 1,
        coordinates: [-116.214531, 51.417611],
      },
      {
        description: 'Jasper National Park',
        day: 3,
        coordinates: [-118.076152, 52.875223],
      },
      {
        description: 'Glacier National Park of Canada',
        day: 5,
        coordinates: [-117.490309, 51.261937],
      },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c2955',
    name: 'The Sea Explorer',
    duration: 7,
    maxGroupSize: 15,
    difficulty: 'medium',
    price: 497,
    summary: 'Exploring the jaw-dropping US east coast by foot and by boat',
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageCover: 'tour-2-cover.jpg',
    images: ['tour-2-1.jpg', 'tour-2-2.jpg', 'tour-2-3.jpg'],
    ratingsAverage: 4.8,
    ratingsQuantity: 6,
    startDates: [
      '2021-06-19T09:00:00.000Z',
      '2021-07-20T09:00:00.000Z',
      '2021-08-18T09:00:00.000Z',
    ],
    locations: [
      {
        description: 'Lummus Park Beach',
        day: 1,
        coordinates: [-80.128473, 25.781842],
      },
      {
        description: 'Islamorada',
        day: 2,
        coordinates: [-80.647885, 24.909047],
      },
      {
        description: 'Sombrero Beach',
        day: 3,
        coordinates: [-81.0784, 24.707496],
      },
      { description: 'West Key', day: 5, coordinates: [-81.768719, 24.552242] },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c295a',
    name: 'The Snow Adventurer',
    duration: 4,
    maxGroupSize: 10,
    difficulty: 'difficult',
    price: 997,
    summary: 'Exciting adventure in the snow with snowboarding and skiing',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    imageCover: 'tour-3-cover.jpg',
    images: ['tour-3-1.jpg', 'tour-3-2.jpg', 'tour-3-3.jpg'],
    ratingsAverage: 4.5,
    ratingsQuantity: 6,
    startDates: [
      '2022-01-05T10:00:00.000Z',
      '2022-02-12T10:00:00.000Z',
      '2023-01-06T10:00:00.000Z',
    ],
    locations: [
      {
        description: 'Aspen Highlands',
        day: 1,
        coordinates: [-106.855385, 39.182677],
      },
      {
        description: 'Beaver Creek',
        day: 2,
        coordinates: [-106.516623, 39.60499],
      },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c295d',
    name: 'The City Wanderer',
    duration: 9,
    maxGroupSize: 20,
    difficulty: 'easy',
    price: 1197,
    summary: "Living the life of Wanderlust in the US' most beautiful cities",
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!',
    imageCover: 'tour-4-cover.jpg',
    images: ['tour-4-1.jpg', 'tour-4-2.jpg', 'tour-4-3.jpg'],
    ratingsAverage: 4.6,
    ratingsQuantity: 5,
    startDates: [
      '2021-03-11T10:00:00.000Z',
      '2021-05-02T09:00:00.000Z',
      '2021-06-09T09:00:00.000Z',
    ],
    locations: [
      { description: 'New York', day: 1, coordinates: [-73.967696, 40.781821] },
      {
        description: 'Los Angeles',
        day: 3,
        coordinates: [-118.324396, 34.097984],
      },
      {
        description: 'San Francisco',
        day: 5,
        coordinates: [-122.408865, 37.787825],
      },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c2961',
    name: 'The Park Camper',
    duration: 10,
    maxGroupSize: 15,
    difficulty: 'medium',
    price: 1497,
    summary: "Breathing in Nature in America's most spectacular National Parks",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
    imageCover: 'tour-5-cover.jpg',
    images: ['tour-5-1.jpg', 'tour-5-2.jpg', 'tour-5-3.jpg'],
    ratingsAverage: 4.7,
    ratingsQuantity: 7,
    startDates: [
      '2021-08-05T09:00:00.000Z',
      '2022-03-20T10:00:00.000Z',
      '2022-08-12T09:00:00.000Z',
    ],
    locations: [
      {
        description: 'Zion Canyon National Park',
        day: 1,
        coordinates: [-112.987418, 37.198125],
      },
      {
        description: 'Antelope Canyon',
        day: 4,
        coordinates: [-111.376161, 36.86438],
      },
      {
        description: 'Grand Canyon National Park',
        day: 5,
        coordinates: [-112.115763, 36.058973],
      },
      {
        description: 'Joshua Tree National Park',
        day: 9,
        coordinates: [-116.107963, 34.011646],
      },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c2966',
    name: 'The Sports Lover',
    duration: 14,
    maxGroupSize: 8,
    difficulty: 'difficult',
    price: 2997,
    summary: 'Surfing, skating, parajumping, rock climbing and more',
    description:
      'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageCover: 'tour-6-cover.jpg',
    images: ['tour-6-1.jpg', 'tour-6-2.jpg', 'tour-6-3.jpg'],
    ratingsAverage: 3.9,
    ratingsQuantity: 7,
    startDates: [
      '2021-07-19T09:00:00.000Z',
      '2021-09-06T09:00:00.000Z',
      '2022-03-18T10:00:00.000Z',
    ],
    locations: [
      {
        description: 'Point Dume Beach',
        day: 1,
        coordinates: [-118.809361, 34.003098],
      },
      {
        description: 'Venice Skate Park',
        day: 4,
        coordinates: [-118.47549, 33.987367],
      },
      {
        description: 'San Diego Skydive',
        day: 6,
        coordinates: [-116.830104, 33.022843],
      },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c296c',
    name: 'The Wine Taster',
    duration: 5,
    maxGroupSize: 8,
    difficulty: 'easy',
    price: 1997,
    summary: 'Exquisite wines, scenic views, exclusive barrel tastings',
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageCover: 'tour-7-cover.jpg',
    images: ['tour-7-1.jpg', 'tour-7-2.jpg', 'tour-7-3.jpg'],
    ratingsAverage: 4.4,
    ratingsQuantity: 7,
    startDates: [
      '2021-02-12T10:00:00.000Z',
      '2021-04-14T09:00:00.000Z',
      '2021-09-01T09:00:00.000Z',
    ],
    locations: [
      {
        description: 'Beringer Vineyards',
        day: 1,
        coordinates: [-122.479887, 38.510312],
      },
      {
        description: 'Clos Pegase Winery',
        day: 3,
        coordinates: [-122.582948, 38.585707],
      },
      {
        description: 'Raymond Vineyard',
        day: 5,
        coordinates: [-122.434697, 38.482181],
      },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c2970',
    name: 'The Star Gazer',
    duration: 9,
    maxGroupSize: 8,
    difficulty: 'medium',
    price: 2997,
    summary:
      'The most remote and stunningly beautiful places for seeing the night sky',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageCover: 'tour-8-cover.jpg',
    images: ['tour-8-1.jpg', 'tour-8-2.jpg', 'tour-8-3.jpg'],
    ratingsAverage: 4.8,
    ratingsQuantity: 6,
    startDates: [
      '2021-03-23T10:00:00.000Z',
      '2021-10-25T09:00:00.000Z',
      '2022-01-30T10:00:00.000Z',
    ],
    locations: [
      {
        description: 'Natural Bridges National Monument',
        day: 1,
        coordinates: [-109.99953, 37.629017],
      },
      {
        description: 'Horseshoe Bend',
        day: 3,
        coordinates: [-111.50954, 36.883269],
      },
      {
        description: 'Death Valley National Park',
        day: 6,
        coordinates: [-117.07399, 36.501435],
      },
    ],
  },
  {
    _id: '5c88fa8cf4afda39709c2974',
    name: 'The Northern Lights',
    duration: 3,
    maxGroupSize: 12,
    difficulty: 'easy',
    price: 1497,
    summary: 'Enjoy the Northern Lights in one of the best places in the world',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageCover: 'tour-9-cover.jpg',
    images: ['tour-9-1.jpg', 'tour-9-2.jpg', 'tour-9-3.jpg'],
    ratingsAverage: 4.7,
    ratingsQuantity: 7,
    startDates: [
      '2021-12-16T10:00:00.000Z',
      '2022-01-16T10:00:00.000Z',
      '2022-12-12T10:00:00.000Z',
    ],
    locations: [
      {
        description: 'Yellowknife',
        day: 1,
        coordinates: [-114.406097, 62.439943],
      },
    ],
  },
];

const SAMPLE_GUIDES = [
  {
    _id: '5c8a21d02f8fb814b56fa189',
    name: 'Steve T.',
    role: 'guide',
    photo: 'user-5.jpg',
    email: 'steve@natours.io',
  },
  {
    _id: '5c8a1f292f8fb814b56fa184',
    name: 'Leo Gillespie',
    role: 'guide',
    photo: 'user-5.jpg',
    email: 'leo@example.com',
  },
  {
    _id: '5c8a201e2f8fb814b56fa186',
    name: 'Jennifer Hardy',
    role: 'guide',
    photo: 'user-6.jpg',
    email: 'jennifer@example.com',
  },
  {
    _id: '5c8a1f4e2f8fb814b56fa185',
    name: 'Jennifer Hardy',
    role: 'guide',
    photo: 'user-6.jpg',
    email: 'jennifer@natours.io',
  },
  {
    _id: '5c8a22c62f8fb814b56fa18b',
    name: 'Kate Jackson',
    role: 'guide',
    photo: 'user-7.jpg',
    email: 'kate@natours.io',
  },
  {
    _id: '5c8a23412f8fb814b56fa18c',
    name: 'Ben Smith',
    role: 'guide',
    photo: 'user-8.jpg',
    email: 'ben@natours.io',
  },
  {
    _id: '5c8a21f22f8fb814b56fa18a',
    name: 'Alex Johnson',
    role: 'guide',
    photo: 'user-9.jpg',
    email: 'alex@natours.io',
  },
];

// DOM Elements
const toursGrid = document.getElementById('toursGrid');
const guidesGrid = document.getElementById('guidesGrid');
const tourModal = document.getElementById('tourModal');
const tourDetail = document.getElementById('tourDetail');
const closeModal = document.querySelector('.close');
const filterButtons = document.querySelectorAll('.filter-btn');

// State
let currentFilter = 'all';
let tours = [];
let guides = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadTours();
  loadGuides();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) =>
        btn.classList.remove('filter-btn--active'),
      );
      button.classList.add('filter-btn--active');
      currentFilter = button.dataset.filter;
      renderTours();
    });
  });

  // Modal close
  closeModal.addEventListener('click', () => {
    tourModal.classList.remove('show');
  });

  tourModal.addEventListener('click', (e) => {
    if (e.target === tourModal) {
      tourModal.classList.remove('show');
    }
  });

  // Keyboard close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tourModal.classList.contains('show')) {
      tourModal.classList.remove('show');
    }
  });
}

// Load Tours
async function loadTours() {
  try {
    // Try to fetch from API, fallback to sample data
    try {
      console.log('Fetching tours from:', `${API_BASE}/tours`);
      const response = await fetch(`${API_BASE}/tours`);
      console.log('Tours response status:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('Tours API data:', data);
        tours = data.data || data;
        console.log('Tours loaded from API:', tours.length);
      } else {
        console.log('Tours API error:', response.status);
        tours = SAMPLE_TOURS;
      }
    } catch (err) {
      console.error('Error fetching tours:', err);
      tours = SAMPLE_TOURS;
    }
    renderTours();
  } catch (error) {
    console.error('Error loading tours:', error);
    toursGrid.innerHTML =
      '<div class="loading">Failed to load tours. Please try again later.</div>';
  }
}

// Load Guides
async function loadGuides() {
  try {
    // Try to fetch from API, fallback to sample data
    try {
      console.log('Fetching users from:', `${API_BASE}/users`);
      const response = await fetch(`${API_BASE}/users`);
      console.log('Users response status:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('Users API data:', data);
        const allUsers = data.data || data;
        console.log('All users:', allUsers);
        guides = allUsers.filter(
          (user) => user.role === 'guide' || user.role === 'lead-guide',
        );
        console.log('Filtered guides:', guides.length);
        if (guides.length === 0) {
          console.log(
            'No guides found with guide/lead-guide role, using all users',
          );
          guides = allUsers || SAMPLE_GUIDES;
        }
      } else {
        console.log('Users API error:', response.status);
        guides = SAMPLE_GUIDES;
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      guides = SAMPLE_GUIDES;
    }
    renderGuides();
  } catch (error) {
    console.error('Error loading guides:', error);
    guidesGrid.innerHTML =
      '<div class="loading">Failed to load guides. Please try again later.</div>';
  }
}

// Render Tours
function renderTours() {
  const filteredTours =
    currentFilter === 'all'
      ? tours
      : tours.filter((tour) => tour.difficulty === currentFilter);

  if (filteredTours.length === 0) {
    toursGrid.innerHTML =
      '<div class="loading">No tours found in this category.</div>';
    return;
  }

  toursGrid.innerHTML = filteredTours
    .map((tour) => createTourCard(tour))
    .join('');

  // Add click listeners to tour cards
  document.querySelectorAll('.tour-card').forEach((card) => {
    card.addEventListener('click', () => {
      const tourId = card.dataset.tourId;
      showTourDetail(tourId);
    });
  });
}

// Create Tour Card
function createTourCard(tour) {
  const stars = createStarRating(tour.ratingsAverage);
  return `
        <div class="tour-card" data-tour-id="${tour._id}">
            <img src="/images/tours/${tour.imageCover}" alt="${tour.name}" class="tour-image" onerror="this.src='https://via.placeholder.com/300x250?text=${encodeURIComponent(tour.name)}'">
            <div class="tour-info">
                <h3>${tour.name}</h3>
                <p class="tour-description">${tour.summary}</p>
                
                <div class="tour-meta">
                    <div class="tour-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${tour.duration} days</span>
                    </div>
                    <div class="tour-meta-item">
                        <i class="fas fa-users"></i>
                        <span>Max ${tour.maxGroupSize}</span>
                    </div>
                    <div class="tour-meta-item">
                        <i class="fas fa-signal"></i>
                        <span class="difficulty-${tour.difficulty}">${tour.difficulty}</span>
                    </div>
                    <div class="tour-meta-item">
                        <i class="fas fa-map-pin"></i>
                        <span>${tour.locations?.length || 0} stops</span>
                    </div>
                </div>

                <div class="tour-rating">
                    ${stars}
                    <span class="tour-rating-text">(${tour.ratingsQuantity} reviews)</span>
                </div>

                <div class="tour-price">
                    $${tour.price}
                    <span>per person</span>
                </div>

                <button class="btn btn-secondary">View Details</button>
            </div>
        </div>
    `;
}

// Show Tour Detail
function showTourDetail(tourId) {
  const tour = tours.find((t) => t._id === tourId);
  if (!tour) return;

  const stars = createStarRating(tour.ratingsAverage);
  const startDates =
    tour.startDates
      ?.map((date) => new Date(date).toLocaleDateString())
      .join(', ') || 'TBA';

  let locationHtml = '';
  if (tour.locations && tour.locations.length > 0) {
    locationHtml = `
            <div class="locations">
                <h3>Tour Stops</h3>
                <div class="location-list">
                    ${tour.locations
                      .map(
                        (loc) => `
                        <div class="location-item">
                            <strong>Day ${loc.day} - ${loc.description}</strong>
                            <em>📍 Coordinates: ${loc.coordinates.join(', ')}</em>
                        </div>
                    `,
                      )
                      .join('')}
                </div>
            </div>
        `;
  }

  tourDetail.innerHTML = `
        <h2>${tour.name}</h2>
        
        <div class="tour-gallery">
            <div class="gallery-main">
                <img src="/images/tours/${tour.imageCover}" alt="${tour.name}" onerror="this.src='https://via.placeholder.com/800x400?text=${encodeURIComponent(tour.name)}'">
            </div>
            ${
              tour.images
                ?.map(
                  (img) => `
                <img src="/images/tours/${img}" alt="${tour.name}" onerror="this.src='https://via.placeholder.com/300x200'">
            `,
                )
                .join('') || ''
            }
        </div>

        <div class="detail-meta">
            <div class="detail-meta-item">
                <span class="detail-meta-label">Duration</span>
                <span class="detail-meta-value">${tour.duration} Days</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">Difficulty</span>
                <span class="detail-meta-value" class="difficulty-${tour.difficulty}">${tour.difficulty}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">Group Size</span>
                <span class="detail-meta-value">up to ${tour.maxGroupSize}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">Price</span>
                <span class="detail-meta-value price">$${tour.price}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">Rating</span>
                <span class="detail-meta-value">${stars}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">Reviews</span>
                <span class="detail-meta-value">${tour.ratingsQuantity} ratings</span>
            </div>
        </div>

        <div class="tour-detail-section">
            <h3>About This Tour</h3>
            <p class="detail-description">${tour.description}</p>
        </div>

        <div class="start-dates">
            <h3>Start Dates</h3>
            <div class="dates-list">
                ${
                  tour.startDates
                    ?.map((date) => {
                      const formattedDate = new Date(date).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        },
                      );
                      return `<span class="date-badge">${formattedDate}</span>`;
                    })
                    .join('') || '<span class="date-badge">TBA</span>'
                }
            </div>
        </div>

        ${locationHtml}

        <button class="btn btn-primary" onclick="bookTour('${tour._id}')">Book This Tour - $${tour.price}</button>
    `;

  tourModal.classList.add('show');
}

// Create Star Rating
function createStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let html = '';

  for (let i = 0; i < fullStars; i++) {
    html += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    html += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    html += '<i class="far fa-star"></i>';
  }

  return html;
}

// Render Guides
function renderGuides() {
  if (guides.length === 0) {
    guidesGrid.innerHTML = '<div class="loading">No guides available.</div>';
    return;
  }

  guidesGrid.innerHTML = guides.map((guide) => createGuideCard(guide)).join('');
}

// Create Guide Card
function createGuideCard(guide) {
  return `
        <div class="guide-card">
            <img src="/images/users/${guide.photo}" alt="${guide.name}" class="guide-image" onerror="this.src='https://via.placeholder.com/300x300?text=${encodeURIComponent(guide.name)}'">
            <div class="guide-info">
                <h3>${guide.name}</h3>
                <p class="guide-role">${guide.role}</p>
                <p class="guide-email">${guide.email}</p>
            </div>
        </div>
    `;
}

// Book Tour Function
function bookTour(tourId) {
  const tour = tours.find((t) => t._id === tourId);
  if (tour) {
    alert(
      `Tour booked: ${tour.name}\nThis will redirect to payment. Feature coming soon!`,
    );
    // In a real application, this would redirect to a booking/payment page
    // window.location.href = `/booking/${tourId}`;
  }
}

// Utility: Format Currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
