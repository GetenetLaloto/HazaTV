---
data_file: index
---

// this file includes all partials and js it needs
// TODO: add webpack to minify or just minify these files

{% include partial_assets/javascript_partials.js %}

function onSubmitForm(){
  console.log('test');
  $('.text-input').val('');
  $('.body-wrapper').addClass('active-responce')

}

$(document).ready(()=>{
  $('.form-responce .button, .form-responce').click(()=>{
    $('.active-responce').removeClass('active-responce');
  });
});
