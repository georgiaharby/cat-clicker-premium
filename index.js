$(function () {
  var controller = {
    catImage: function (slug, img) {
      view.showCat(slug, img);
    },
    catClicks: function (slug) {
      var count = 0;
      $('.image-' + slug).click(function () {
        count =+ 1;
        view.cat(count);
      });
    }
  };

  var model = {
    findCat: function () {
      for (var i = 0; i < cats.catsList.length; i++) {
        cat = cats.catsList[i];
        controller.catImage(cat.slug, cat.img);
      }
    },
    findImage: function () {
      for (var x = 0; x < cats.catsList.length; x++) {
        cat = cats.catsList[x];
        controller.catClicks(cat.slug);
      }
    }
  };
  var view = {
    populateList: function() {
      for (var i = 0; i < cats.catsList.length; i++) {
        $('.cat_list .list').append('<li><button class="cat-' + cats.catsList[i].slug + '">' + cats.catsList[i].title + '</button></li>');
      }
    },
    showCat: function (slug, img) {
      $('.cat-' + slug).click(function () {
        $('.image').html('<img class="image-' + slug + '" src=' + img +'>');
        $('.clicks').html('<h1>Clicks:<h2 class="count"></h2></h1>');
      });
    }
  };
  // controller.catClicks();
  view.populateList();
  model.findCat();
});
