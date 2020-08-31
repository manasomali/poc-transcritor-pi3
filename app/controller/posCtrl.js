app.controller('posCtrl', function($scope,$http,$localStorage,$sessionStorage) {
  $scope.enderecourl='https://manasomalidev.cf/';
    
    $scope.getTranscricoesPos=function()
    {
      if($scope.usuario.logado) {
        $http({
            method: 'GET',
            url: $scope.enderecourl + 'app/php/get/getTranscricoesPos.php',
            headers: {
              'Content-Type': undefined
            }
        })
        .then(function(response){
            $scope.transcricoestr=response.data;
            hot2.loadData($scope.transcricoestr);
        }, function(){
            alert("erro");
        });
      }
    }
    
    $scope.postTranscricoesPos=function()
    {
        var id = hot2.getDataAtCol(0);
        var assunto = hot2.getDataAtCol(1);
        var eqp = hot2.getDataAtCol(2);
        var local = hot2.getDataAtCol(3);
        var operador = hot2.getDataAtCol(4);
        var datahorainicial = hot2.getDataAtCol(5);
        var datahorafinal = hot2.getDataAtCol(6);
        var horainformada = hot2.getDataAtCol(7);
        var agente = hot2.getDataAtCol(8);
        var cortecarga = hot2.getDataAtCol(9);
        var sgi = hot2.getDataAtCol(10);
        var texto = hot2.getDataAtCol(11);
        var centro = hot2.getDataAtCol(12);
        var linhas = id.length;

        $http({
            method: 'POST',
            url: $scope.enderecourl + 'app/php/post/postTranscricoesPos.php',
            headers: {
              'Content-Type': undefined
            },
            data: 
            {   
              "id":id,
              "assunto":assunto,
              "eqp":eqp,
              "local":local,
              "operador":operador,
              "datahorainicial":datahorainicial,
              "datahorafinal":datahorafinal,
              "horainformada":horainformada,
              "agente":agente,
              "cortecarga":cortecarga,
              "sgi":sgi,
              "texto":texto,
              "centro":centro,
              "linhas": linhas
            }
        })
        .then(function(response){
            alert("ID das Trancrições Atualizadas:"+response.data);
            $scope.getTranscricoesPos();
        }, function(){
            alert("erro");
        });
    }
    $scope.getTranscricoesParaExclusao=function()
    {
      $scope.idparaexcluir = hot2.getDataAtCol(0);
      $("#modal-confirmacao-exclusao").modal("show");
      $("#modal-confirmacao-exclusao").modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
      });
    }
    $scope.getTranscricoesParaAtualizacao=function()
    {
      $scope.idparaatualizar = hot2.getDataAtCol(0);
      $("#modal-confirmacao-atualizacao").modal("show");
      $("#modal-confirmacao-atualizacao").modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
      });
    }
    $scope.postExcluirTranscricoesPos=function()
    {
        var id = hot2.getDataAtCol(0);
        var linhas = id.length;

        $http({
            method: 'POST',
            url: $scope.enderecourl + 'app/php/post/postExcluirTranscricoesPos.php',
            headers: {
              'Content-Type': undefined
            },
            data: 
            {   
              "id":id,
              "linhas": linhas
            }
        })
        .then(function(response){
            alert("ID das Trancrições Excluidas:"+response.data);
            $scope.getTranscricoesPos();
        }, function(){
            alert("erro");
        });
    }
  
  // Event for `keydown` event. Add condition after delay of 200 ms which is counted from time of last pressed key.
  var debounceFn = Handsontable.helper.debounce(function (colIndex, event) {
    var filtersPlugin = hot2.getPlugin('filters');
  
    filtersPlugin.removeConditions(colIndex);
    filtersPlugin.addCondition(colIndex, 'contains', [event.target.value]);
    filtersPlugin.filter();
  }, 200);
  
  var addEventListeners = function (input, colIndex) {
    input.addEventListener('keydown', function(event) {
      debounceFn(colIndex, event);
    });
  };
  
  // Build elements which will be displayed in header.
  var getInitializedElements = function(colIndex) {
    var div = document.createElement('div');
    var input = document.createElement('input');
  
    div.className = 'filterHeader';
  
    addEventListeners(input, colIndex);
  
    div.appendChild(input);
  
    return div;
  };
  
  // Add elements to header on `afterGetColHeader` hook.
  var addInput = function(col, TH) {
    // Hooks can return value other than number (for example `columnSorting` plugin use this).
    if (typeof col !== 'number') {
      return col;
    }
  
    if (col >= 0 && TH.childElementCount < 2) {
      TH.appendChild(getInitializedElements(col));
    }
  };
  
  // Deselect column after click on input.
  var doNotSelectColumn = function (event, coords) {
    if (coords.row === -1 && event.target.nodeName === 'INPUT') {
      event.stopImmediatePropagation();
      this.deselectCell();
    }
  };

    var hotElement2 = document.querySelector('#handpos');
    var hotSettings2 = {
    columns: [
      {
          data: 'id',
          type: 'numeric',
          readOnly: true,
          className: "htCenter htMiddle",
          width: 30
      },
      {
          data: 'assunto',
          type: 'text',
          className: "htCenter htMiddle",
          width: 135
      },
      {
          data: 'eqp',
          type: 'text',
          className: "htCenter htMiddle",
          width: 30
      },
      {
          data: 'local',
          type: 'text',
          className: "htCenter htMiddle",
          width: 100
      },
      {
          data: 'operador',
          type: 'text',
          className: "htCenter htMiddle",
          width: 85
      },
      {
          data: 'datahorainicial',
          type: 'date',
          dateFormat: 'DD/MM/YYYY HH:mm:ss',
          className: "htCenter htMiddle",
          width: 148
      },
      {
          data: 'datahorafinal',
          type: 'date',
          dateFormat: 'DD/MM/YYYY HH:mm:ss',
          className: "htCenter htMiddle",
          width: 148
      },
      {
          data: 'horainformada',
          type: 'time',
          timeFormat: 'HH:mm',
          className: "htCenter htMiddle",
          width: 40
      },
      {
          data: 'agente',
          type: 'text',
          className: "htCenter htMiddle",
          width: 65
      },
      {
        data: 'cortecarga',
        type: 'text',
        className: "htCenter htMiddle",
        width: 30
      },
      {
          data: 'sgi',
          type: 'text',
          className: "htCenter htMiddle",
          width: 70
      },
      {
          data: 'texto',
          type: 'text',
          className: "htCenter htMiddle",
          width: 200
      },
      {
          data: 'centro',
          type: 'text',
          className: "htCenter htMiddle",
          width: 40
      }
  ],
    colHeaders: [
        '<br><br>ID',
        '<br><br>Assunto',
        '<br><br>Eqp',
        '<br><br>Local',
        '<br><br>Operador',
        '<br><br>Data<br>hora<br>inicial',
        '<br><br>Data<br>hora<br>final',
        '<br><br>Hora<br>inf.',
        '<br><br>Agente',
        '<br><br>Corte<br>Carga',
        '<br><br>SGI',
        '<br><br>Texto',
        '<br><br>Centro'
    ],
    stretchH: 'all',
    autoWrapRow: true,
    height: 450,
    width: '100%',
    exportFile: true,
    rowHeaders: false,
    filters: true,
    dropdownMenu: true,
    wordWrap: true,
    manualColumnResize: true,
    dropdownMenu: ['filter_by_condition', 'filter_action_bar'],
    afterGetColHeader: addInput,
    beforeOnCellMouseDown: doNotSelectColumn,
    licenseKey: 'non-commercial-and-evaluation'
    };
    var hot2 = new Handsontable(hotElement2, hotSettings2);
    
    $scope.exportCSV2=function()
    {
      hot2.getPlugin("exportFile").downloadFile("csv", {
          filename: "Tabela_Transcritor_[DD]-[MM]-[YYYY]",
          columnDelimiter: ';',
          rowDelimiter: '\r\n',
          columnHeaders: false,
          rowHeaders: false,
          exportHiddenColumns: true,
          exportHiddenRows: true
        });
    }
    
});