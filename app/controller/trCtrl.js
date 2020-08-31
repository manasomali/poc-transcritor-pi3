app.controller('trCtrl', function($scope,$http,$localStorage,$sessionStorage) {
    $scope.enderecourl='https://manasomalidev.cf/';
    $('textarea').highlightWithinTextarea({
        highlight: [
            {
              highlight: $scope.destacaRed,
              className: 'red'
            },
            {
              highlight: $scope.destacaBlue,
              className: 'blue'
            },
            {
              highlight: $scope.destacaGreen,
              className: 'green'
            },
            {
              highlight: $scope.destacaCian,
              className: 'cian'
            },
            {
              highlight: $scope.destacaPink,
              className: 'pink'
            },
            {
              highlight: $scope.destacaOrange,
              className: 'orange'
            },
            {
              highlight: $scope.destacaYellow,
              className: 'yellow'
            }
        ]
    });
    $scope.destacaRed = function () {
        return $('#assunto').val();
    }
    $scope.destacaBlue = function () {
        return $('#eqp').val();
    }
    $scope.destacaGreen = function () {
        return $('#local').val();
    }
    $scope.destacaCian = function () {
        return $('#horainformada').val();
    }
    $scope.destacaPink = function () {
        return $('#agente').val();
    }
    $scope.destacaOrange = function () {
        return $('#cortecarga').val();
    }
    $scope.destacaYellow = function () {
        return $('#sgi').val();
    }

    $scope.registro= {};
    
    $scope.names = ["devolução de eqp", "corte de carga", "interrupção forçada", "abertura sgi", "fechamento sgi", "controle de tensão"];
    $scope.my = { favorite: '' };

    $scope.registro.assunto='';
    $scope.registro.eqp='';
    $scope.registro.local='';
    $scope.registro.horainformada=null;
    $scope.registro.datahorainicial='';
    $scope.registro.agente='';
    $scope.registro.cortecarga='';
    $scope.registro.sgi='';

    $scope.getTranscricoesTr=function()
    {
        if($scope.usuario.logado){
            $http({
                method: 'POST',
                url: $scope.enderecourl + 'app/php/get/getTranscricoesTr.php',
                headers: {
                    'Content-Type': undefined
                },
                data: {
                    "operador": $scope.usuario.usuario,
                    "centro": $scope.usuario.regiao
                }
            })
            .then(function(response){
                $scope.transcricoestr=response.data;
                //console.log(response.data)
                hot1.loadData($scope.transcricoestr);
            }, function(){
                alert("erro");
            });
        }
    }
    $scope.postTranscricoesTr=function()
    {
        if(document.getElementById("assunto").value!='') {
            $scope.registro.assunto = document.getElementById("assunto").value;
        }
        if(document.getElementById("eqp").value!='') {
            $scope.registro.eqp = document.getElementById("eqp").value;
        }
        if(document.getElementById("local").value!='') {
            $scope.registro.local = document.getElementById("local").value;
        }
        if(document.getElementById("horainformada").value!='') {
            $scope.registro.horainformada = document.getElementById("horainformada").value;
        }
        if(document.getElementById("cortecarga").value!='') {
            $scope.registro.cortecarga = document.getElementById("cortecarga").value;
        }
        if(document.getElementById("agente").value!='') {
            $scope.registro.agente = document.getElementById("agente").value;
        }
        if(document.getElementById("sgi").value!='') {
            $scope.registro.sgi = document.getElementById("sgi").value;
        }
        if(($scope.registro.assunto=='') || ($scope.registro.texto=='')) {
            alert('Informe no mínimo o assunto e texto');
            $scope.registro.verificacao=0;
        } else {
            $scope.registro.verificacao=1;
        }
        if($scope.registro.verificacao==1) {
            $http({
                method: 'POST',
                url: $scope.enderecourl + 'app/php/post/postTranscricoesTr.php',
                headers: {
                    'Content-Type': undefined
                },
                data: {            
                    "assunto": $scope.registro.assunto,
                    "eqp": $scope.registro.eqp,
                    "local": $scope.registro.local,
                    "operador": $scope.usuario.usuario,
                    "datahorainicial": $scope.registro.datahorainicial,
                    "datahorafinal": $scope.registro.datahorafinal,
                    "horainformada": $scope.registro.horainformada,
                    "agente": $scope.registro.agente,
                    "cortecarga": $scope.registro.cortecarga,
                    "sgi": $scope.registro.sgi,
                    "texto": $scope.registro.texto,
                    "centro": $scope.usuario.regiao
            }
            })
            .then(function(response){
                //console.log(response);
                alert('Registro realizado!');
                $scope.getTranscricoesTr();
            }, function(){
                alert("erro");
            });
        }  
    }
    var hotElement1 = document.querySelector('#handtr');
    var hotSettings1 = {
    columns: [
        {
            data: 'id',
            type: 'numeric',
            readOnly: true
        },
        {
            data: 'assunto',
            type: 'text'
        },
        {
            data: 'eqp',
            type: 'text'
        },
        {
            data: 'local',
            type: 'text'
        },
        {
            data: 'datahorainicial',
            type: 'date',
            dateFormat: 'DD/MM/YYYY HH:mm:ss',
            readOnly: true
        },
        {
            data: 'horainformada',
            type: 'time',
            timeFormat: 'HH:mm'
        },
        {
            data: 'agente',
            type: 'text'
        },
        {
            data: 'cortecarga',
            type: 'text'
        },
        {
            data: 'sgi',
            type: 'text'
        },
        {
            data: 'texto',
            type: 'text'
        }
    ],
    colHeaders: [
        '<br>ID',
        '<br>Assunto',
        '<br>Eqp',
        '<br>Local',
        '<br>Data<br>hora<br>inicial',
        '<br>Hora<br>inf.',
        '<br>Agente',
        '<br>Corte<br>carga',
        '<br>SGI',
        '<br>Texto'
    ],
    stretchH: 'last',
    autoWrapRow: false,
    height: 450,
    colWidths: [25, 105, 25, 60, 110, 40, 50, 35, 60, 100],
    width: '100%',
    exportFile: true,
    rowHeaders: false,
    filters: true,
    dropdownMenu: true,
    wordWrap: false,
    manualColumnResize: true,
    dropdownMenu: ['filter_by_condition', 'filter_action_bar'],
    licenseKey: 'non-commercial-and-evaluation'
    };
    var hot1 = new Handsontable(hotElement1, hotSettings1);

    $scope.exportCSV1=function()
    {
        hot1.getPlugin("exportFile").downloadFile("csv", {
            filename: "Tabela_Transcritor_[DD]-[MM]-[YYYY]",
            columnDelimiter: ';',
            rowDelimiter: '\r\n',
            columnHeaders: false,
            rowHeaders: false,
            exportHiddenColumns: true,
            exportHiddenRows: true
        });
    }
    $scope.limpaTextbox=function() {
        $('#textotranscrito').val('');
    }
    $scope.analizaTextbox=function() {
        var bancoagente = ['cotesa', 'engie', 'eletrosul', 'energisa', 'rge', 'celesc', 'ceee'];
        //var bancocentro = ['norte', 'sul', 'sudeste'];
        var bancoeqp = ['BC', 'LT', 'RT'];
        //var bancooperador = ['Felipe', 'Marcos', 'Luiz', 'Matheus', 'Joao', 'Jose', 'Rafael', 'Fernando', 'Leticia'];
        var bancolocal = ['lageado', 'lacerda', 'povo', 'santiago', 'monjolinho', 'machadinho', 'sepe'];
        var textolocal = ['lageado 2', 'jorge lacerda', 'povo novo', 'salto santiago', 'monjolinho', 'machadinho', 'sao sepe'];
        var bancohora = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        var bancominuto = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

        // ONS centro regional sul Felipe, fechamento de sgi 123456/20
        // ONS centro regional sul Matheus, desligar banco de capacitor de Lageado 2 para controle de tensão 18:35

        var texto=document.getElementById("textotranscrito").value;
        $scope.registro.texto=texto;
        const palavras = texto.split(' ');
        const palavraslowcase = texto.split(' ');

        //substitui palavras
        texto=texto.replace(/OMS/gi, "ONS");
        texto=texto.replace(/banco de capacitor/gi, "BC");
        texto=texto.replace(/banco de capacitores/gi, "BC");
        texto=texto.replace(/linha de trasmissão/ig, "LT");
        texto=texto.replace(/reator/ig, "RT");
        texto=texto.replace(/reatores/ig, "RT");
        texto=texto.replace(/uniade geradora/ig, "UG");
        texto=texto.replace(/uniades geradoras/ig, "UG");
        console.log(texto);
        document.getElementById("textotranscrito").value = texto;

        // lowcase
        for (var i = 0; i < palavras.length; i++) {
            palavraslowcase[i]=palavras[i].toLowerCase();
        }
        

        // procura assunto
        $scope.registro.assunto = $scope.my.favorite;

        // procura eqp
        for (var i = 0; i < bancoeqp.length; i++) {
            if (palavraslowcase.indexOf(bancoeqp[i]) > -1 || palavraslowcase.indexOf(bancoeqp[i] + ',') > -1 || palavraslowcase.indexOf(bancoeqp[i] + '.') > -1) {
                $scope.registro.eqp = bancoeqp[i];
                break;
            }
        }
        
        // procura local
        for (var i = 0; i < bancolocal.length; i++) {
            if (palavraslowcase.indexOf(bancolocal[i]) > -1 || palavraslowcase.indexOf(bancolocal[i] + ',') > -1 || palavraslowcase.indexOf(bancolocal[i] + '.') > -1) {
                $scope.registro.local = textolocal[i];
                break;
            }
        }

        // pega datahorafinal
        var d = new Date();
        var datahorafinal = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        $scope.registro.datahorafinal=datahorafinal;

        // pega datahorainicial
        if($scope.registro.datahorainicial=='') {
            $scope.registro.datahorainicial=datahorafinal;
        }

        // procura horamininformado
        for (var k = 0; k < palavraslowcase.length; k++) {
            var a = palavraslowcase[k].split(':');
            if (a.length>1) {
                for (var i = 0; i < bancohora.length; i++) {
                    if (a.indexOf(bancohora[i] + ',') != -1 || a.indexOf(bancohora[i]) != -1 || a.indexOf(bancohora[i] + '.') != -1) {
                    var g =a[1];
                        for (var j = 0; j < bancominuto.length; j++) {
                        if (g.indexOf(bancominuto[j] + ',') != -1 || g.indexOf(bancominuto[j]) != -1 || g.indexOf(bancominuto[j] + '.') != -1) {
                            $scope.registro.horainformada = bancohora[i] + ':' + bancominuto[j];
                            break;
                        }
                        }
                    }
                    }
            }
        }

        // procura agente
        for (var i = 0; i < 3; i++) {
            if (palavraslowcase.indexOf(bancoagente[i]) > -1 || palavraslowcase.indexOf(bancoagente[i] + ',') > -1 || palavraslowcase.indexOf(bancoagente[i] + '.') > -1){
                $scope.registro.agente = bancoagente[i];
                break;
            }
        }

        // procura cortecarga
        if(palavraslowcase.indexOf('carga') != -1){
            $scope.registro.cortecarga = palavraslowcase[(palavraslowcase.indexOf('carga'))+2];
        }

        // procura sgi
        if(palavraslowcase.indexOf('sgi') != -1){
            $scope.registro.sgi = palavraslowcase[(palavraslowcase.indexOf('sgi'))+2];
        }

        // procura centro
        /*
        for (var i = 0; i < bancocentro.length; i++) {
            if (palavraslowcase.indexOf(bancocentro[i]) > -1 || palavraslowcase.indexOf(bancocentro[i] + ',') > -1 || palavraslowcase.indexOf(bancocentro[i] + '.') > -1) {
            document.getElementById("centro").value = bancocentro[i];
            break;
            }
        }
        */

        // procura operador
        /*
        for (var i = 0; i < bancooperador.length; i++) {
            if (palavraslowcase.indexOf(bancooperador[i] + ',') != -1 || palavraslowcase.indexOf(bancooperador[i] + ',') != -1 || palavraslowcase.indexOf(bancooperador[i]+ '.') != -1) {
            document.getElementById("operador").value = bancooperador[i];
            break;
            }
        }
        */
        

        document.getElementById("assunto").value = $scope.registro.assunto;
        document.getElementById("eqp").value = $scope.registro.eqp;
        document.getElementById("local").value = $scope.registro.local;
        document.getElementById("horainformada").value = $scope.registro.horainformada;
        document.getElementById("cortecarga").value = $scope.registro.cortecarga;
        document.getElementById("agente").value = $scope.registro.agente;
        document.getElementById("sgi").value = $scope.registro.sgi;
        $('textarea').highlightWithinTextarea('update');

    }
    $scope.pegarHoraInicial=function() {
        var d = new Date();
        var datahorainicial = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        $scope.registro.datahorainicial=datahorainicial;
    }
    
    $scope.criaBotao=function() {
    var novoassunto = document.getElementById("nome-assunto").value;    
    if(document.getElementById("nome-assunto").value!="")
    {
        $scope.names.push(novoassunto);
        document.getElementById("nome-assunto").value="";
    }
    else {
        alert('Informe o assunto do botão para adição');
    }
    $scope.removeBotao=function() {
        if(document.getElementById("nome-assunto").value!="")
        {
            const index = $scope.names.indexOf(document.getElementById("nome-assunto").value);
            if (index > -1) {
                $scope.names.splice(index, 1);
            }
        }
        else {
            alert('Informe o assunto do botão para exclusão');
        }
    }
}
});
function botaoRecord() {
    var element = document.getElementById("recButton");
    if(element.classList.contains("Rec"))
    {
        element.classList.add("notRec");
        element.classList.remove("Rec");
    }
    else
    {
        element.classList.remove("teste");
        setup();
        element.classList.remove("notRec");
        element.classList.add("Rec");
    }
}

