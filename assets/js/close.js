var span = document.getElementsByClassName("close", "close1", "close2")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }

    document.getElementById('cancel1').addEventListener('click', function () {
      ["myRadio1", "myRadio2", "myRadio3", "myRadio4", "myRadio5", "myRadio6", "myRadio7", "myRadio8", "myRadio9", "myRadio0", "myRadioa", "myRadiob", "myRadioc", "myRadiod", "myRadioe", "myRadiof", "myRadiog", "myRadioh", "myRadioi", "myRadioj"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
    })

    document.getElementById('cancel2').addEventListener('click', function () {
      ["myRadioa", "myRadiob", "myRadioc", "myRadiod", "myRadioe", "myRadiof", "myRadiog", "myRadioh", "myRadioi", "myRadioj"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
    })
    
    document.getElementById('cancel3').addEventListener('click', function () {
      ["myRadiok", "myRadiol", "myRadiom", "myRadion", "myRadioo", "myRadiop", "myRadioq", "myRadior", "myRadios", "myRadiot"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      return false;
    })