package com.fellipe.CadastroDeProdutos.repository;

import com.fellipe.CadastroDeProdutos.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
