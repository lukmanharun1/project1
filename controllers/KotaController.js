const express = require('express');
const models = require('../models');
const axios = require('axios');

const API_KEY = 'e4dd6ae85f21c3e8a0ec8e2661b0f592';
const getAllKota = async (req, res) => {
    try {
        const kota = await models.Kota.findAll({});
        res.status(200).send({
            status: 'success',
            data: kota
        });
    } catch (error) {
        res.status(503).send({
            status: 'error',
            message: error
        })
    }
}

const createKota = async (req, res) => {
    try {
        axios.get(`https://api.rajaongkir.com/starter/city?key=${API_KEY}`)
            .then(async success => {
                const resultsRajaOngkir = success.data.rajaongkir.results;
                const created = [];
                resultsRajaOngkir.forEach(result => {
                    created.push({
                        provinsi: result.province,
                        type: result.type,
                        nama_kota: result.city_name
                    });
                });
                const createKota = await models.Kota.bulkCreate(created);
                res.status(200).send({
                    status: 'success',
                    data: createKota
                }); 
            })
       
    } catch (error) {
        res.status(503).send({
            status: 'error',
            message: error
        })
    }
}
const showKotaById = async (req, res) => {
    try {
        // cari kota berdasarkan id
        const id = req.params.id;
        const getKota = await models.Kota.findAll({
            where: {
                id
            }
        });
        res.status(200).send({
            status: 'success',
            data: getKota
        });
    } catch (error) {
        res.status(503).send({
            status: 'error',
            message: error
        })
    }
}
const updateKota = async (req, res) => {
    try {
        // cari kota berdasarkan id
        const id = req.params.id;
       

        // const provinsi = req.body.provinsi;
        // const type = req.body.type;
        // const nama_kota = req.body.nama_kota;
        const updateKota = await models.Kota.update(req.body, {
            where: {
                id
            }
        });
        if (!updateKota) {
            res.status(404).send({
                status: 'not found',
                message: `id ${id} tidak ada!`
            });
        }
        const getKota = await models.Kota.findAll({
            where: {
                id
            }
        });
        if (getKota.length < 1) {
            res.status(404).send({
                status: 'not found',
                message: `id ${id} tidak ada!`
            });
        }
        res.status(200).send({
            status: 'success',
            data: getKota
        });
    } catch (error) {
        res.status(503).send({
            status: 'error',
            message: error
        })
    }
}

const hapusKota = async (req, res) => {
     try {
         // hapus kota berdasarkan id
        const id = req.params.id;
        const hapusKotaById = await models.Kota.destroy({
            where: {
                id
            }
        })
        if (!hapusKotaById) {
            res.status(404).send({
                status: 'not found',
                message: `id ${id} tidak ada!`
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'data kota berhasil dihapus!'
            });
        }
     } catch (error) {
        res.status(503).send({
            status: 'error',
            message: error
        })
    }
}
module.exports = {
    getAllKota,
    createKota,
    showKotaById,
    updateKota,
    hapusKota

}