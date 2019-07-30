# -*- coding: utf-8 -*-

from pprint import pprint


class Parse(object):

    def __init__(self):
        self.attr_to_value = {}
        self.attr_to_num = {}
        self.valid_attr = ["name", "id"]
        self.invalid_attr = []

    def parse_doc_tree(self, nodeId, node_info, DOC):
        self.attr_to_value = {}
        self.attr_to_num = {}
        # print "check node: ", node_info
        _attr = node_info['node']['attributes']
        for idx, item in enumerate(_attr):
            if idx % 2 == 0:
                self.attr_to_value[item] = _attr[idx + 1]
                self.attr_to_num[item] = 0

        self.tree_find_attr(DOC['root'])
        # print self.attr_to_num
        for item in self.attr_to_value:
            if self.attr_to_num[item] == 1 and self.attr_to_value[item] != "":
                if item in self.valid_attr:
                    return self.attr_to_value[item], item
                elif item not in self.invalid_attr and item != 'class':
                    _code = "//" + node_info['node']['localName'] + "[@" + item + "='" + \
                            self.attr_to_value[item] + "']"
                    return _code, "xpath"

        xpath = self.get_xpath_by_nodeId(nodeId, DOC)
        return xpath, "xpath"

    def get_xpath_by_nodeId(self, nodeId, DOC):
        steps = self.depth_find(DOC["root"], nodeId, [], 0)
        # pprint(steps)
        if not steps or steps[-1]["nodeId"] != nodeId:
            print("not found", nodeId)
            return None
        xpath = []

        siblings = []
        for node in steps:
            if node["nodeType"] == 1:   # element
                # start with css id
                attr = node["attributes"]
                if "id" in attr:
                    css_id = attr[attr.index("id") + 1]
                    xpath = ['//*[@id=\\"%s\\"]' % css_id]
                    siblings = node["children"]
                    continue

                part = node["localName"]
            elif node["nodeType"] == 3:  # text
                part = "text()"
            elif node["nodeType"] == 9:  # document
                part = ""
            else:
                pprint(node)
                part = "?"

            idx = self.xpath_index(node, siblings)
            if idx > 0:
                part += "[%s]" % idx
            xpath.append(part)

            siblings = node["children"]

        xpath = "/".join(xpath)
        return xpath

    def xpath_index(self, node, siblings):
        if len(siblings) < 2:
            return 0
        ownIndex = node["ownIndex"]
        if ownIndex == 0:
            return 0
        cnt = 0
        for i in range(ownIndex):
            sib = siblings[i]
            # to be completed
            if sib["nodeType"] == node["nodeType"]:
                if node["nodeType"] in (1, 3):
                    if node["localName"] == sib["localName"]:
                        cnt += 1
                else:
                    cnt += 1
        if not cnt:
            return 0

        # xpath starts with 1
        cnt += 1
        # print(len(siblings), cnt)
        return cnt

    def tree_find_attr(self, node):
        children = node.get("children", [])
        attr = node.get("attributes", [])
        for idx, item in enumerate(attr):
            if idx % 2 == 0:
                # 与选中节点有相同属性
                if item in self.attr_to_value:
                    value = attr[idx+1]
                    # 与选中节点属性的value相同
                    if self.attr_to_value[item] == value:
                        self.attr_to_num[item] += 1
        # 继续遍历所有子节点
        for item in children:
            self.tree_find_attr(item)

    def depth_find(self, node, nodeId, steps, idx):
        # print(node["nodeId"])
        children = node.get("children", [])
        node["ownIndex"] = idx
        # if node['backendNodeId'] == 12:
        #     print "find this node:===============", node['contentDocument']
        steps = steps + [node]
        # print(steps)
        if node["nodeId"] == nodeId:
            return steps
        for idx, child in enumerate(children):
            ret = self.depth_find(child, nodeId, steps, idx)
            if ret:
                return ret


if __name__ == '__main__':
    _test = Parse()
    xpath = _test.get_id_by_nodeId(11111, {})
    pprint(xpath)
