<template>

  <div class="container text-center">
    <div class="row">
        <div class="col-8"><input class="put" type="filtro" placeholder="Nome da Especialidade"></div>
      <div class="col-4"><button type="button" class="btn btn-primary btn-lg">Cadastrar</button>
        <div class="btn-group">
          <button @click="OpenOption()" type="button" class="btn btn-secondary dropdown-toggle btn-lg op-btn" data-bs-toggle="dropdown" aria-expanded="false"><!--an on click function should be added-->
            opcoes
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><button class="dropdown-item" type="button">PESQUISAR</button></li>
            <li><button class="dropdown-item" type="button">ADICIONAR</button></li>
            <li><button class="dropdown-item" type="button">EDITAR</button></li>
            <li><button class="dropdown-item" type="button">DELETAR</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style>
.container{
  margin-top: 20px;
}
.btn-options{
  width: 800px;
}
.col-8{
display: flex;
align-items: center;
justify-content: center;
}
.put{
  width: 750px;
  height: 40px;
}
.op-btn{
  margin-left: 10px;
}

</style>
