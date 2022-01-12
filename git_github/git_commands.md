# GIT

Para ver o histórico de commits, commit por commit, linha por linha de todas as alterações:
```bash
git log -p
```

Podemos formatar a forma na qual as informações dos commits serão exibidas:
```bash
git log --pretty="parâmetros de formatação"
```

---

## Repositório puro
Repositório servidor no qual só vai conter as alterações e não vai manter cópias dos arquivos.
Com este comando nós criamos um repositório que não terá a working tree, ou seja, não conterá uma cópia dos nossos arquivos. Como o repositório servirá apenas como servidor, para que outros membros da equipe sincronizem seus trabalhos, poupamos espaço de armazenamento desta forma.
Não se esqueça do parâmetro --bare:
```bash
git config core.bare true
```
Caso tenha executado o comando init sem esse parâmetro, execute na sequência o seguinte comando:
```bash
git init --bare
```

Lista os repositórios remotos:
```bash
git remote
```

Adiciona um novo repositório remoto o endereço pode ser uma url, um endereço de rede e até um caminho no disco:
```bash
git remote add "nome-do-repositório-remoto" "endereço-do-repositório-remoto"
```

Lista os repositórios remotos com os seus respectivos endereços:
```bash
git remote -v
```

```bash
git push "nome-do-repositório-remoto" "nome-da-branch-atual"
```

Renomeia o repositório remoto:
```bash
git remote rename "antigo-nome" "novo-nome"
```

```bash
git pull "nome-do-repositório-remoto" "nome-da-branch-atual"
```

`-u` é para que sempre que você der git push ele já interpretar como git push origin master. **Não usar pois pode bagunçar as coisas**:
```bash
git push -u origin master
```

Cria uma branch já mudando para ela:
```bash
git checkout -b "nome-da-nova-branch"
```

O merge junta os trabalhos e gera um merge commit.
O rebase aplica os commits de outra branch na branch atual.
Com isso, evitamos os commits de merge. Há uma longa discussão sobre o que é "melhor": rebase ou merge. Estude, pesquise, e tire suas próprias conclusões.
Aqui tem um artigo (de milhares outros) que cita o assunto:

https://medium.com/datadriveninvestor/git-rebase-vs-merge-cc5199edd77c.

Após o merge o git vai abrir o editor para você adicionar uma mensagem para explicar o motivo do merge esteja na branch em que você quer atualizar ou seja a **HEAD** na branch que você quer atualizar:
```bash
git merge "nome-da-branch-com-atualizações"
```

O rebase atualiza a branch que o HEAD está mas mantém o trabalho realizado nela como último, no caso o commit dela será o último e os commits de atualização que vierem da outra branch ficarão antes deste commit:
```bash
git rebase "nome-da-branch-com-atualizações"
```

---

## Conflitos de merge e rebase

Sempre que houver conflitos você deve abrir o/s arquivo/s que contém conflito/s e checar o/s conflito/s após decidir qual versão do código você quer deixar você adiciona para o git rastrear e commita após isso realiza o merge/rebase novamente.

Mostra o histórico de commit com as linhas de desenvolvimento (branch) de forma visual:
```bash
git log --graph
```

---

## Voltando no tempo

Com o git checkout nós desfazemos uma alteração que ainda não foi adicionada ao index ou stage, ou seja, antes do git add. Depois de adicionar com git add, para desfazer uma alteração, precisamos tirá-la deste estado, com git reset.
Agora, se já realizamos o commit, o comando git revert pode nos salvar.

Desfaz as alterações do arquivo não rastreado:
```bash
git checkout -- "nome-do-arquivo"
```

Muda o arquivo de rastreado para não rastreado:
```bash
git reset HEAD "nome-do-arquivo"
```

Cria um novo commit sem as alterações do commit no qual a hash foi informada informando quais alterações foram desfeitas:
```bash
git revert "hash-do-commit"
```

---

## Salvando temporariamente

Para salvar temporariamente alterações não rastreadas para continuar a manutenção outra hora.
Quando precisamos pausar o desenvolvimento de alguma funcionalidade, ou correção, antes de finalizar, talvez não seja interessante realizar um commit, pois o nosso código pode não estar funcionando ainda.
Nesse caso é interessante salvar o trabalho para podermos voltar a ele depois:
```bash
git stash
```

Lista tudo que está salvo na stash
```bash
git stash list
```

Volta o que foi salvo para o working-tree sem o número pega a última alteração na stash:
```bash
git stash apply "número-do-stash"
```

Remove o que está salvo na stash sem o número pega a última alteração na stash:
```bash
git stash drop "número-do-stash"
```

Faz o apply e o drop simultaneamente sem o número pega a última alteração na stash. **não tenho certeza se com o número ele vai funcionar**:
```bash
git stash pop "número-do-stash"
```

---

## Deslocando entre commits

Você muda a HEAD para o commit no qual informou a hash sempre que quiser fazer alterações a partir de um commit antigo crie uma nova branch se não as alterações e commits que você fizer vão estar desanexadas da linha principal de desenvolvimento.
A descrição do comando git checkout --help, em uma tradução livre é:
> "Atualizar os arquivos na working tree para ficarem na versão especificada. [...]".

Basicamente, podemos deixar o nosso código no estado do último commit de uma branch, de um commit específico, ou mesmo tags:
```bash
git checkout "hash-do-commit"
```

Para vermos as modificações de um arquivo que estamos editando e ainda está não rastreado em relação ao último commit (**Ou também caso ele estivesse rastreado? Não sei**).

O sinal de subtração `(-)` antes da linha indica que ela não está mais presente no arquivo. Já o sinal de adição `(+)` mostra que é uma linha nova.
Alterações são representadas por uma remoção e uma adição de linha:
```bash
git diff
```

Para vermos várias modificações de uma única vez entre um período, no caso entre dois commit como no exemplo abaixo:
```bash
git diff "número-do-commit-inicial".."número-do-commit-final"
```

---

## TAG

Gera um marco/ponto histórico na nossa aplicação, gera uma *release/versão*:
```bash
git tag -a "nome-da-tag" -m "mensagem-de-descrição-da-tag"
```

Para enviar a tag para o repositório remoto.
O *GitHub* nos dá a possibilidade de baixar um arquivo compactado contendo o código no estado em que a tag foi gerada:
```bash
git push "nome-do-repositório-remoto" "nome-da-tag"
```

---

## Materiais de apoio

https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Gravando-Altera%C3%A7%C3%B5es-em-Seu-Reposit%C3%B3rio

https://devhints.io/git-log

https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

https://git-school.github.io/visualizing-git/

https://medium.datadriveninvestor.com/git-rebase-vs-merge-cc5199edd77c