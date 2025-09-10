package com.fellipe.CadastroDeProdutos.controller;

import com.fellipe.CadastroDeProdutos.model.Produto;
import com.fellipe.CadastroDeProdutos.service.ProdutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<Produto> getAll(){
        return produtoService.getAll();
    }

    @PostMapping
    public Produto save(@RequestBody Produto produto){
        return produtoService.save(produto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        produtoService.delete(id);
    }
}
