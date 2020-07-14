const mongoose = require('mongoose');

const GiftSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('gift', GiftSchema);
