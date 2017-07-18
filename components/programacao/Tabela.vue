<template>
  <div id="tabela" class="tabela">
    <div class="columns">
      <div class="column is-3">
        <nav class="panel">
          <div class="panel-heading">
            Navegação
          </div>
          <a class="panel-block" @click="activeTab = 0">
            <b-icon pack="fa" icon="bars" size="is-small"></b-icon> Ver Tudo
          </a>
          <a class="panel-block" @click="activeTab = 1">
            <b-icon pack="fa" icon="calendar" size="is-small"></b-icon> 1º Dia - (07/12)
          </a>
          <a class="panel-block" @click="activeTab = 2">
            <b-icon pack="fa" icon="calendar" size="is-small"></b-icon> 2º Dia - (08/12)
          </a>
          <a class="panel-block" @click="activeTab = 3">
            <b-icon pack="fa" icon="calendar" size="is-small"></b-icon> 3º Dia - (09/12)
          </a>
          <a class="panel-block" @click="activeTab = 4">
            <b-icon pack="fa" icon="bullhorn" size="is-small"></b-icon> Trabalhos Científicos
          </a>
        </nav>
      </div>
      <div class="column is-9">
        <b-tabs v-model="activeTab">
          <b-tab-item>
            <!-- DIA 01-->
            <b-table
                :data="dia1principal"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-primary" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>
            <!-- DIA 02 -->
            <b-table
                :data="dia2principal"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-primary" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia2clact"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-warning" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia2cobract"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-danger" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>
            <!-- DIA 03-->
            <b-table
                :data="dia3principal"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-primary" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia3clact"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-warning" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia3cobract"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-danger" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia3trabalhos"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-success" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>
          </b-tab-item>

          <b-tab-item>
            <b-table
                :data="dia1principal"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-primary" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>
          </b-tab-item>

          <b-tab-item>
            <b-table
                :data="dia2principal"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-primary" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia2clact"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-warning" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia2cobract"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-danger" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>
          </b-tab-item>

          <b-tab-item>
            <b-table
                :data="dia3principal"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-primary" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia3clact"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-warning" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia3cobract"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-danger" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>

            <b-table
                :data="dia3trabalhos"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-success" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>
          </b-tab-item>
          <b-tab-item>
                        <b-table
                :data="dia3trabalhos"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :checkable="isCheckable"
                :mobile-cards="hasMobileCards"
                :paginated="isPaginated"
                :per-page="perPage"
                :pagination-simple="isPaginationSimple"
                default-sort="programacao.nome"
                :selected.sync="selected"
                :checked-rows.sync="checkedRows">

                <template scope="props">
                    <b-table-column :label="props.row.data">
                       {{ props.row.horario }}
                    </b-table-column>

                    <b-table-column width="300" field="evento" label="Evento" v-bind:class="{'intervalo' : props.row.intervalo}">
                        <span class="tag is-info" v-show="!checkEmpty(props.row.eixo)">{{ props.row.eixo }}</span>
                        <span class="tag is-success" v-show="!checkEmpty(props.row.auditorio)">{{ props.row.auditorio }}</span>
                        <p class="is-6">{{ props.row.descricao }}</p>
                        <ul v-show="!checkEmpty(props.row.grupos)">
                          <li v-for="grupos in props.row.grupos" v-bind:key="grupos" >{{ grupos }}</li>
                        </ul>
                        <article class="media" v-show="!checkEmpty(props.row.palestrante.nome)">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img :src="props.row.palestrante.fotourl" :alt="props.row.palestrante.nome">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{{props.row.palestrante.nome}}</strong>
                                <br>
                                {{ props.row.palestrante.ocupacao }}
                              </p>
                            </div>
                          </div>
                        </article>                       
                    </b-table-column>

                </template>
            </b-table>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '~components/database/Config'

export default {
  name: 'Tabela',
  data () {
    return {
      activeTab: 0,
      programacao: {},
      dia1principal: {},
      dia2principal: {},
      dia2clact: {},
      dia2cobract: {},
      dia3principal: {},
      checkedRows: [],
      selected: {},
      isBordered: false,
      isStriped: false,
      isNarrowed: true,
      isCheckable: false,
      hasMobileCards: true,
      isPaginated: false,
      isPaginationSimple: false,
      perPage: 10
    }
  },
  firebase: {
    programacao: {
      source: db.ref('programacao'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia1principal: {
      source: db.ref('dia1/principal'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia2principal: {
      source: db.ref('dia2/principal'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia2clact: {
      source: db.ref('dia2/clact'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia2cobract: {
      source: db.ref('dia2/cobract'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia3principal: {
      source: db.ref('dia3/principal'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia3clact: {
      source: db.ref('dia3/clact'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia3cobract: {
      source: db.ref('dia3/cobract'),
      cancelCallback (err) {
        console.log(err)
      }
    },
    dia3trabalhos: {
      source: db.ref('dia3/trabalhos'),
      cancelCallback (err) {
        console.log(err)
      }
    }
  },
  methods: {
    formatDate (value, row) {
      return `<span class="tag is-success">
        ${new Date(value).toLocaleDateString()}
      </span>`
    },
    clearSelected () {
      this.selected = {}
    },
    clearCheckedRows () {
      this.checkedRows = []
    },
    checkEmpty (data) {
      let resultado = data === ''
      return resultado
    }
  }
}
</script>

<style>
.programacao .tabela{
    font-size: 1rem;
}
.programacao .tabela .tabs ul{
  display: none;
}
.programacao .tabela thead th{
  display: none;
}
.programacao .tabela .intervalo{
  background-color: #fde6bd !important;
}
.programacao .tabela thead th:first-child{
  display: block !important;
  border: none;
  font-size: 1.25rem;
}
.programacao .tabela .icon{
  margin-right: 5px !important;
  vertical-align: middle;
}
.content table tbody tr td:first-child{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 15%;
  background: #183651;
  color: whitesmoke;
  font-size: 1.2rem;
  font-weight: 500;
  border-right: 1px #ccc solid;
}
.content table tbody tr td:last-child{
  display: table-cell;
  width: 900px;
  padding: 10px 20px;
  background: whitesmoke;
}
.table tr.is-selected{
  color: #333 !important;
}
</style>
