[
  '{{repeat(35,37)}}',
  {
    _id: '{{objectId()}}',
    lastName: '{{surname()}}',
    firstName: '{{firstName()}}',
    mail: '{{email()}}',
    addresses: ['{{repeat(1,5)}}',
               {
                  street:'{{integer(100, 999)}} {{street()}}',
                  city: '{{city()}}', 
                  country:'{{state()}}',
                  cp :'{{integer(1000, 9900)}}0'
                }],  
    company: '{{company().toUpperCase()}}',
    birthdate:'{{date()}}',
    currency: function (tags) {
      var fruits = ['euro', 'dollar', 'livre','rouble','francSuisse','yen'];
      return fruits[tags.integer(0, fruits.length - 1)];
    },
    password:"bioport",
    cart:[],
    accountType: function (tags) {
      var fruits = ['premium', 'silver'];
      return fruits[tags.integer(0, fruits.length - 1)];
    },  
    registrationDate:'{{date()}}',
    subscriptionDate:'{{date()}}',
    suppressionDate:'{{date()}}'
  }
]
