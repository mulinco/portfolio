// schemaTypes/projeto.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projetos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Tipo de Projeto',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'Frontend'},
          {title: 'Backend', value: 'Backend'},
          {title: 'Data Science', value: 'Data Science'},
          {title: 'Full Stack', value: 'Full Stack'},
          {title: 'Bioinformatics', value: 'Bioinformatics'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descrição Curta (Card)',
      type: 'string',
      validation: (Rule) =>
        Rule.max(150).warning('Mantenha curto para não quebrar o layout do card.'),
    }),
    defineField({
      name: 'longDescription',
      title: 'Descrição Longa (Modal)',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Imagem de Capa',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'techs',
      title: 'Tecnologias',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'github',
      title: 'Link do GitHub',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'demo',
      title: 'Link do Live Demo',
      type: 'url',
    }),
    // Campo extra recomendado para gerar URLs no futuro
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    }),
  ],
})
