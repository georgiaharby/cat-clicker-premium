$(function () {
  var view = {
    populateList: function() {
      for (var i = 0; i < cats.catsList.length; i++) {
        $('.cat_list .list').append('<li><button class="cat-' + cats.catsList[i].slug + '">' + cats.catsList[i].title + '</button></li>');
      }
    },
    showImage: function (slug, img) {
      $('.cat-' + slug).click(function () {
        $('.image').html('<img class="image-' + slug + '" src=' + img +'>');
      });
    }
  };
  var model = {
    findCat: function () {
      for (var i = 0; i < cats.catsList.length; i++) {
        controller.init(cats.catsList[i].slug, cats.catsList[i].img);
      }
    }
  };
  var controller = {
    init: function () {
      view.populateList();
      view.showImage();
    }
  };

  controller.init();
});
